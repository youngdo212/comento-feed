import { callApi } from '@/utils/api';
import {
  CLOSE_MODAL,
  FETCH_ADS,
  FETCH_CARDS,
  FETCH_CATEGORY,
  FETCH_POSTS,
  INITIALIZE_CARDS,
  OPEN_MODAL,
  SET_VALUE
} from './types';
import {
  AD_INTERVAL,
  FETCH_AD_LENGTH,
  FETCH_POST_LENGTH,
  SortOptions
} from '@/constant';
import { normalizeObjectProperty } from '@/utils/normalize';
import { CardType } from '@/constant';
import { makeCard } from '@/utils/card';

const INITIAL_STATE = {
  cards: [],
  posts: [],
  ads: [],
  postNextPage: 1,
  postLastPage: Infinity,
  adNextPage: 1,
  adLastPage: Infinity,
  ord: SortOptions.ASC,
  isModalVisible: false,
  category: null,
  filteredCategoryIds: null
};

const getters = {
  hasMoreCards(state) {
    return state.postNextPage <= state.postLastPage;
  },
  isCardEmpty(state) {
    return state.cards.length === 0;
  }
};

const mutations = {
  /**
   * key와 value를 이용해서 상태를 변경한다.
   *
   * @param {object} state
   * @param {object} payload
   * @param {string} payload.key
   * @param {any} payload.value
   */
  [SET_VALUE](state, payload) {
    const { key, value } = payload;
    state[key] = value;
  },

  /**
   * cards와 관련된 상태를 초기화한다.
   *
   * @param {object} state
   */
  [INITIALIZE_CARDS](state) {
    state.cards = INITIAL_STATE.cards;
    state.posts = INITIAL_STATE.posts;
    state.ads = INITIAL_STATE.ads;
    state.postNextPage = INITIAL_STATE.postNextPage;
    state.postLastPage = INITIAL_STATE.postLastPage;
    state.adNextPage = INITIAL_STATE.adNextPage;
    state.adLastPage = INITIAL_STATE.adLastPage;
  },

  /**
   * 모달 창을 띄운다
   *
   * @param {object} state
   */
  [OPEN_MODAL](state) {
    state.isModalVisible = true;
  },

  /**
   * 모당 창을 닫는다
   *
   * @param {object} state
   */
  [CLOSE_MODAL](state) {
    state.isModalVisible = false;
  }
};

const actions = {
  /**
   * 서버로부터 post와 ad를 받아와 card를 추가한다.
   *
   * @param {object} context
   * @param {function} context.commit
   * @param {object} context.state
   */
  async [FETCH_CARDS]({ dispatch, commit, state }) {
    await dispatch(FETCH_CATEGORY);
    await dispatch(FETCH_POSTS);
    await dispatch(FETCH_ADS);

    const newCards = [];

    state.posts.forEach((post, index) => {
      newCards.push(
        makeCard({
          id: `${CardType.Post}-${index}`,
          type: CardType.Post,
          data: post
        })
      );

      if ((index + 1) % AD_INTERVAL === 0) {
        newCards.push(
          makeCard({
            id: `${CardType.Ad}-${index}`,
            type: CardType.Ad,
            data: state.ads[(index + 1) / AD_INTERVAL - 1]
          })
        );
      }
    });

    commit(SET_VALUE, {
      key: 'cards',
      value: newCards
    });
  },

  /**
   * 서버로 부터 post를 불러온다.
   *
   * @param {object} context
   * @param {function} context.commit
   * @param {object} context.state
   */
  async [FETCH_POSTS]({ commit, state }) {
    if (state.postNextPage > state.postLastPage) return;

    const { data, last_page } = await callApi({
      url: '/api/list',
      params: {
        page: state.postNextPage,
        ord: state.ord,
        category: state.filteredCategoryIds,
        limit: FETCH_POST_LENGTH
      }
    });

    commit(SET_VALUE, {
      key: 'postNextPage',
      value: state.postNextPage + 1
    });

    commit(SET_VALUE, {
      key: 'postLastPage',
      value: last_page
    });

    commit(SET_VALUE, {
      key: 'posts',
      value: [
        ...state.posts,
        ...data.map(post => normalizeObjectProperty(post))
      ]
    });
  },

  /**
   * 서버로 부터 ad를 불러온다.
   *
   * @param {object} context
   * @param {function} context.commit
   * @param {object} context.state
   */
  async [FETCH_ADS]({ commit, state }) {
    if (state.ads.length * AD_INTERVAL >= state.posts.length) return;

    const { data, last_page } = await callApi({
      url: '/api/ads',
      params: {
        page: state.adNextPage,
        limit: FETCH_AD_LENGTH
      }
    });

    commit(SET_VALUE, {
      key: 'adNextPage',
      value: state.adNextPage === state.adLastPage ? 1 : state.adNextPage + 1
    });

    commit(SET_VALUE, {
      key: 'adLastPage',
      value: last_page
    });

    commit(SET_VALUE, {
      key: 'ads',
      value: [...state.ads, ...data.map(ad => normalizeObjectProperty(ad))]
    });
  },

  /**
   * category를 불러온 뒤 기본 설정된 카테고리 필터값을 저장한다.
   *
   * @param {object} context
   * @param {function} context.commit
   * @param {function} context.state
   */
  async [FETCH_CATEGORY]({ commit, state }) {
    if (state.category) return;

    const { category } = await callApi({
      url: '/api/category'
    });

    commit(SET_VALUE, {
      key: 'category',
      value: category
    });

    commit(SET_VALUE, {
      key: 'filteredCategoryIds',
      value: category.map(item => item.id)
    });
  }
};

export default {
  state: { ...INITIAL_STATE },
  getters,
  mutations,
  actions
};

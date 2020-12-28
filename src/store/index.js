import { createStore } from 'vuex';
import { callApi } from '../utils/api';
import {
  CLOSE_MODAL,
  FETCH_ADS,
  FETCH_CARDS,
  FETCH_POSTS,
  FETCH_UPDATE_ORD,
  INITIALIZE_CARDS,
  OPEN_MODAL,
  SET_VALUE
} from './types';
import {
  AD_INTERVAL,
  FETCH_AD_LENGTH,
  FETCH_POST_LENGTH,
  SortOptions,
  FETCH_CARD_DELAY
} from '../constant';
import { normalizeObjectProperty } from '@/utils/normalize';
import { CardType } from '../constant';
import { makeCard } from '../utils/card';
import { debounce } from '../utils/function';

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
  category: [
    {
      id: 1,
      name: 'apple'
    },
    {
      id: 2,
      name: 'banana'
    },
    {
      id: 3,
      name: 'coconut'
    }
  ],
  filteredCategoryIds: [1, 3]
};

const getters = {
  hasMoreCards(state) {
    return state.postNextPage <= state.postLastPage;
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
        category: [1, 2, 3],
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
   * 정렬 순서를 변경한 후 다시 card를 로드한다
   *
   * @param {object} context
   * @param {function} context.dispatch
   * @param {function} context.commit
   * @param {object} context.state
   * @param {string} value SortOptions enum의 값
   */
  async [FETCH_UPDATE_ORD]({ dispatch, commit, state }, value) {
    if (state.ord === value) return;

    commit(SET_VALUE, {
      key: 'ord',
      value
    });
    commit(INITIALIZE_CARDS);
    await dispatch(FETCH_CARDS);
  }
};

export default createStore({
  state: { ...INITIAL_STATE },
  getters,
  mutations,
  actions: {
    ...actions,
    [FETCH_CARDS]: debounce(actions[FETCH_CARDS], FETCH_CARD_DELAY)
  }
});

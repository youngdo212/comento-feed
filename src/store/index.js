import { createStore } from 'vuex';
import { callApi } from '../utils/api';
import { FETCH_ADS, FETCH_CARDS, FETCH_POSTS, SET_VALUE } from './types';
import { AD_INTERVAL, FETCH_AD_LENGTH, FETCH_POST_LENGTH } from '../constant';
import { normalizeObjectProperty } from '@/utils/normalize';
import { CardType } from '../constant';
import { makeCard } from '../utils/card';

const state = {
  cards: [],
  posts: [],
  ads: [],
  postNextPage: 1,
  postLastPage: Infinity,
  adNextPage: 1,
  adLastPage: Infinity
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
        ord: 'asc',
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
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

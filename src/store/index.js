import { createStore } from 'vuex';
import { callApi } from '../utils/api';
import { FETCH_CARDS, FETCH_POSTS, SET_VALUE } from './types';
import { FETCH_POST_LENGTH } from '../constant';
import { normalizeObjectProperty } from '@/utils/normalize';
import { CardType } from '../constant';
import { makeCard } from '../utils/card';

const state = {
  cards: [],
  posts: [],
  nextPage: 1,
  lastPage: Infinity
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
   * 서버로 부터 카드를 받아온다.
   *
   * @param {object} param
   * @param {function} param.commit
   * @param {object} param.state
   */
  async [FETCH_CARDS]({ dispatch, commit, state }) {
    if (state.nextPage > state.lastPage) return;

    await dispatch(FETCH_POSTS);

    const newCards = state.posts.map(post =>
      makeCard({
        type: CardType.Post,
        data: post
      })
    );

    commit(SET_VALUE, {
      key: 'cards',
      value: [...state.cards, ...newCards]
    });

    commit(SET_VALUE, {
      key: 'posts',
      value: []
    });
  },

  /**
   * 서버로 부터 post를 불러온다.
   *
   * @param {object} param
   * @param {function} param.commit
   * @param {object} param.state
   */
  async [FETCH_POSTS]({ commit, state }) {
    const { data, last_page } = await callApi({
      url: '/api/list',
      params: {
        page: state.nextPage,
        ord: 'asc',
        category: [1, 2, 3],
        limit: FETCH_POST_LENGTH
      }
    });

    commit(SET_VALUE, {
      key: 'nextPage',
      value: state.nextPage + 1
    });

    commit(SET_VALUE, {
      key: 'lastPage',
      value: last_page
    });

    commit(SET_VALUE, {
      key: 'posts',
      value: [
        ...state.posts,
        ...data.map(post => normalizeObjectProperty(post))
      ]
    });
  }
};

export default createStore({
  state,
  mutations,
  actions
});

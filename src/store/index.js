import { createStore } from 'vuex';
import { callApi } from '../utils/api';
import { ADD_CARDS, FETCH_CARDS } from './types';
import { FETCH_CARD_LENGTH } from '../constant';
import { normalizeObjectProperty } from '@/utils/normalize';

const state = {
  cards: [],
  nextPage: 1,
  lastPage: Infinity
};

const mutations = {
  /**
   * 상태에 카드를 추가한다.
   *
   * @param {object} state
   * @param {object} payload
   * @param {array} payload.cards
   */
  [ADD_CARDS](state, payload) {
    state.cards.push(...payload.cards);
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
  async [FETCH_CARDS]({ commit, state }) {
    if (state.nextPage > state.lastPage) return;

    const { data, last_page } = await callApi({
      url: '/api/list',
      params: {
        page: state.nextPage,
        ord: 'asc',
        category: [1, 2, 3],
        limit: FETCH_CARD_LENGTH
      }
    });

    state.nextPage = state.nextPage + 1;
    state.lastPage = last_page;

    commit(ADD_CARDS, {
      cards: data.map(card => normalizeObjectProperty(card))
    });
  }
};

export default createStore({
  state,
  mutations,
  actions
});

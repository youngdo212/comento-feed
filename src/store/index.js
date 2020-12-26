import { createStore } from 'vuex';
import { getCards } from '../utils/api';
import { ADD_CARDS, FETCH_CARDS } from './types';

const state = {
  cards: []
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
   */
  async [FETCH_CARDS]({ commit }) {
    const cards = await getCards();
    commit(ADD_CARDS, {
      cards
    });
  }
};

export default createStore({
  state,
  mutations,
  actions
});

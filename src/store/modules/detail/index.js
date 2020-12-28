import { callApi } from '@/utils/api';
import { normalizeObjectProperty } from '@/utils/normalize';
import { FETCH_POST, SET_VALUE } from './types';

const INITIAL_STATE = {
  post: null
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
   * id를 이용해 post를 불러온 후 상태에 저장한다.
   *
   * @param {object} context
   * @param {function} context.commit
   * @param {number} id
   */
  async [FETCH_POST]({ commit }, id) {
    const { data } = await callApi({
      url: '/api/view',
      params: {
        id
      }
    });

    const reply = data.reply.map(item => normalizeObjectProperty(item));
    const post = { ...data, reply };

    commit(SET_VALUE, {
      key: 'post',
      value: normalizeObjectProperty(post)
    });
  }
};

export default {
  state: { ...INITIAL_STATE },
  mutations,
  actions
};

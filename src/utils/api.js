import axios from 'axios';
import { API_HOST, FETCH_CARD_LENGTH } from '../constant';
import { normalizeObjectProperty } from './normalize';

export function getCards() {
  return axios({
    method: 'get',
    baseURL: API_HOST,
    url: '/api/list',
    params: {
      page: 0,
      ord: 'asc',
      category: [1, 2, 3],
      limit: FETCH_CARD_LENGTH
    }
  }).then(({ data }) => {
    const cards = data.data || [];

    return cards.map(card => normalizeObjectProperty(card));
  });
}

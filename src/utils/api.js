import axios from 'axios';
import { API_HOST } from '../constant';

/**
 * 서버에 비동기 요청을 보내고 응답을 받는다
 *
 * @param {object=} param
 * @param {string=} param.method http request method
 * @param {string=} param.url 요청할 url. 절대 경로와 상대 경로 둘 다 가능하다
 * @param {object=} param.params url query parameter
 * @param {object=} param.data request body
 * @returns {Promise}
 */
export function callApi({ method = 'get', url = '/', params, data }) {
  return axios({
    method,
    baseURL: API_HOST,
    url,
    params,
    data
  }).then(({ data }) => {
    return data;
  });
}

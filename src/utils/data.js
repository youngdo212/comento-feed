/**
 * ISO 문자열 형식의 날짜를 포매팅한다.
 *
 * @example
 * formatISOString('2019-11-11T06:00:49.000000Z');
 * // returns '2019-11-11';
 *
 * @param {string} isoString
 * @returns {string}
 */
export function formatISOString(isoString) {
  return isoString.substr(0, 10);
}

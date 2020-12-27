/**
 * enum 형태의 객체의 값들을 배열로 반환한다.
 *
 * @param {object} enumObject
 * @returns {array}
 */
export function getEnumValues(enumObject) {
  return Object.keys(enumObject).map(key => enumObject[key]);
}

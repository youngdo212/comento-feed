/**
 * snake_case로 작성된 객체의 속성 이름을 kebab-case로 변경한다.
 *
 * @param {object} obj
 */
export function normalizeObjectProperty(obj) {
  const normalized = {};

  Object.keys(obj).forEach(key => {
    const kebabCased = key.replace(/_/i, '-');

    normalized[kebabCased] = obj[key];
  });

  return normalized;
}

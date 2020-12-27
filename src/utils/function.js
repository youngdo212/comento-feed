/**
 * debounce하는 함수를 반환한다.
 *
 * @param {function} callback
 * @param {number} delay millisecond 단위의 숫자
 */
export function debounce(callback, delay) {
  let timeoutId;
  let timestamp = 0;

  return function(...args) {
    const gap = Date.now() - timestamp;

    if (gap < delay) {
      clearTimeout(timeoutId);
    }

    timestamp = Date.now();
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

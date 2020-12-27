import { CardType } from '../constant';
import { getEnumValues } from './enum';

let cardId = 0;

/**
 * Card 컴포넌트에 사용되는 card 객체를 생성한다
 * @param {object} param
 * @param {CardType.Post | CardType.Ad} param.type
 * @param {object} param.data
 * @return {object | undefined}
 */
export function makeCard({ type, data }) {
  if (getEnumValues(CardType).indexOf(type) === -1) return;

  return {
    id: cardId++,
    type,
    data
  };
}

<template>
  <div class="card-list">
    <CardListItem
      v-for="card in cards"
      :key="card.id"
      :type="card.type"
      :data="card.data"
      @click="goToDetail(card)"
    />
  </div>
</template>

<script>
import CardListItem from '@/components/CardListItem.vue';
import { CardType } from '@/constant';

export default {
  name: 'CardList',
  components: {
    CardListItem
  },
  props: {
    cards: Array
  },
  methods: {
    /**
     * 카드의 타입이 post일 경우 상세 페이지로 이동한다.
     *
     * @param {object} card
     * @param {string} card.type
     * @param {object} card.data
     * @param {number} card.data.id
     */
    goToDetail({ type, data }) {
      if (type !== CardType.Post) return;
      this.$router.push(`/${data.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  float: right;
  width: $card-list-width;

  @media (max-width: $layout-breakpoint-mobile) {
    width: 100%;
  }
}
</style>

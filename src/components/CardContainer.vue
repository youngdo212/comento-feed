<template>
  <div class="card-container">
    <CardContainerHeader />
    <Card
      v-for="card in cards"
      :key="card.id"
      :type="card.type"
      :data="card.data"
      @click="goToDetail(card)"
    />
    <InfiniteScroll v-if="hasMoreCards" @load="fetchCards" />
  </div>
</template>

<script>
import CardContainerHeader from '@/components/CardContainerHeader.vue';
import Card from '@/components/Card.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { FETCH_CARDS } from '@/store/modules/home/types';
import { CardType } from '@/constant';

export default {
  name: 'CardContainer',
  components: {
    CardContainerHeader,
    Card,
    InfiniteScroll
  },
  computed: {
    ...mapState({
      cards: state => state.home.cards
    }),
    ...mapGetters(['hasMoreCards'])
  },
  methods: {
    ...mapActions({
      fetchCards: FETCH_CARDS
    }),

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
.card-container {
  float: right;
  width: $card-container-width;

  @media (max-width: $layout-breakpoint-mobile) {
    width: 100%;
  }
}
</style>

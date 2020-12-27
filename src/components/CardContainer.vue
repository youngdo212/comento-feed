<template>
  <div class="card-container">
    <Card
      v-for="card in cards"
      :key="card.id"
      :type="card.type"
      :data="card.data"
    />
    <InfiniteScroll v-if="hasMoreCards" @load="debouncedFetchCards" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import { mapActions, mapState } from 'vuex';
import { FETCH_CARDS } from '../store/types';
import { debounce } from '../utils/function';
import { FETCH_CARD_DELAY } from '../constant';

export default {
  name: 'CardContainer',
  components: {
    Card,
    InfiniteScroll
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
      hasMoreCards: state => state.lastPage >= state.nextPage
    })
  },
  methods: {
    ...mapActions({
      fetchCards: FETCH_CARDS
    })
  },
  created() {
    this.debouncedFetchCards = debounce(this.fetchCards, FETCH_CARD_DELAY);
    this.debouncedFetchCards();
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

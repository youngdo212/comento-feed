<template>
  <div class="card-container">
    <Card v-for="card in cards" v-bind="card" :key="card.id" />
    <InfiniteScroll @load="fetchCards" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import { mapActions, mapState } from 'vuex';
import { FETCH_CARDS } from '../store/types';

export default {
  name: 'CardContainer',
  components: {
    Card,
    InfiniteScroll
  },
  computed: {
    ...mapState(['cards'])
  },
  methods: {
    ...mapActions({
      fetchCards: FETCH_CARDS
    })
  },
  created() {
    this.fetchCards();
    // this.debouncedFetchCards = debounce(this.fetchCards, 500);
    // this.debouncedFetchCards();
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

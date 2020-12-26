<template>
  <div class="card-container">
    <Card v-for="card in cards" v-bind="card" :key="card.id" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapActions, mapState } from 'vuex';
import { FETCH_CARDS } from '../store/types';

export default {
  name: 'CardContainer',
  components: {
    Card
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

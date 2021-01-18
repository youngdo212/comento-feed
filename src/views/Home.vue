<template>
  <div class="home">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      <User />
      <CardListHeader @orderchange="onOrderChange" />
      <CardList :cards="cards" />
      <InfiniteScroll v-if="hasMoreCards" @load="debouncedFetchCards" />
    </Content>
    <Filter @save="onFilterSave" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import User from '@/components/User.vue';
import CardListHeader from '@/components/CardListHeader.vue';
import CardList from '@/components/CardList.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import Filter from '@/components/Filter.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import { FETCH_CARDS, INITIALIZE_CARDS } from '@/store/modules/home/types';
import { debounce } from '@/utils/function';
import { FETCH_CARD_DELAY } from '@/constant';

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    User,
    CardListHeader,
    CardList,
    InfiniteScroll,
    Filter
  },
  computed: {
    ...mapState({
      cards: state => state.home.cards
    }),
    ...mapGetters(['hasMoreCards', 'isCardEmpty'])
  },
  methods: {
    ...mapMutations({
      initializeCards: INITIALIZE_CARDS
    }),

    ...mapActions({
      fetchCards: FETCH_CARDS
    }),

    /**
     * 저장된 필터값을 이용해서 새로운 card를 로드한다
     */
    onFilterSave() {
      this.initializeCards();
      this.debouncedFetchCards();
    },

    /**
     * 변경된 순서를 이용해서 cards를 다시 불러온다
     */
    onOrderChange() {
      this.initializeCards();
      this.debouncedFetchCards();
    }
  },
  created() {
    this.debouncedFetchCards = debounce(this.fetchCards, FETCH_CARD_DELAY);

    // 카드가 비어있으면 카드를 불러온다.
    if (this.isCardEmpty) {
      this.debouncedFetchCards();
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  @media (max-width: $layout-breakpoint-mobile) {
    background-color: #f4f5f7;
  }
}
</style>

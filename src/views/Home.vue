<template>
  <div class="home">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      <User />
      <CardContainer />
    </Content>
    <Filter @save="onFilterSave" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import User from '@/components/User.vue';
import CardContainer from '@/components/CardContainer.vue';
import Filter from '@/components/Filter.vue';
import { mapActions, mapMutations } from 'vuex';
import {
  FETCH_CARDS,
  FETCH_CATEGORY,
  INITIALIZE_CARDS
} from '@/store/modules/home/types';

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    User,
    CardContainer,
    Filter
  },
  methods: {
    ...mapMutations({
      initializeCards: INITIALIZE_CARDS
    }),

    ...mapActions({
      fetchCards: FETCH_CARDS,
      fetchCategory: FETCH_CATEGORY
    }),

    /**
     * 저장된 필터값을 이용해서 새로운 card를 로드한다
     */
    onFilterSave() {
      this.initializeCards();
      this.fetchCards();
    }
  },
  created() {
    this.fetchCategory();
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

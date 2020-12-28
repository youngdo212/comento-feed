<template>
  <div class="card-container-header">
    <SortOptionContainer
      :options="sortOptions"
      :selectedValue="ord"
      @select="fetchUpdateOrd($event)"
    />
    <button class="card-container-header__filter-button" @click="openModal">
      필터
    </button>
  </div>
</template>

<script>
import SortOptionContainer from '@/components/SortOptionContainer.vue';
import { SortOptions, SORT_OPTIONS_NAME_MAP } from '../constant';
import { getEnumValues } from '@/utils/enum';
import { mapActions, mapMutations, mapState } from 'vuex';
import { FETCH_UPDATE_ORD, OPEN_MODAL } from '@/store/types';

export default {
  name: 'CardContainerHeader',
  components: {
    SortOptionContainer
  },
  data() {
    return {
      sortOptions: getEnumValues(SortOptions).map(sortOption => ({
        value: sortOption,
        title: SORT_OPTIONS_NAME_MAP[sortOption]
      }))
    };
  },
  computed: {
    ...mapState(['ord'])
  },
  methods: {
    ...mapMutations({
      openModal: OPEN_MODAL
    }),
    ...mapActions({
      fetchUpdateOrd: FETCH_UPDATE_ORD
    })
  }
};
</script>

<style lang="scss" scoped>
.card-container-header {
  height: $card-container-header-height;
  margin-bottom: 11px;
  overflow: hidden;
  background-color: #fff;

  @media (max-width: $layout-breakpoint-mobile) {
    padding: 10px 15px 10px 18px;
    border-bottom: 1px solid #e1e4e7;
    margin-bottom: 0px;
  }
}

.card-container-header__filter-button {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: $card-container-header-height;
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  line-height: 1.92;
  color: #adb5bd;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  background-color: #fff;
  outline: none;
  cursor: pointer;
}
</style>

<template>
  <div class="card-list-header">
    <SortOptionList
      :options="sortOptions"
      :selectedValue="ord"
      @select="sort"
    />
    <button class="card-list-header__filter-button" @click="openModal">
      필터
    </button>
  </div>
</template>

<script>
import SortOptionList from '@/components/SortOptionList.vue';
import { SortOptions, SORT_OPTIONS_NAME_MAP } from '@/constant';
import { getEnumValues } from '@/utils/enum';
import { mapMutations, mapState } from 'vuex';
import { OPEN_MODAL, SET_VALUE } from '@/store/modules/home/types';

export default {
  name: 'CardListHeader',
  components: {
    SortOptionList
  },
  emits: ['orderchange'],
  data() {
    return {
      sortOptions: getEnumValues(SortOptions).map(sortOption => ({
        value: sortOption,
        title: SORT_OPTIONS_NAME_MAP[sortOption]
      }))
    };
  },
  computed: {
    ...mapState({
      ord: state => state.home.ord
    })
  },
  methods: {
    ...mapMutations({
      setValue: SET_VALUE,
      openModal: OPEN_MODAL
    }),

    /**
     * 정렬 순서 상태를 변경하고 이벤트를 발생시킨다.
     *
     * @param {'asc' | 'desc'} ord
     */
    sort(ord) {
      if (this.ord === ord) return;

      this.setValue({
        key: 'ord',
        value: ord
      });
      this.$emit('orderchange');
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list-header {
  float: right;
  width: $card-list-width;
  height: $card-list-header-height;
  margin-bottom: 11px;
  overflow: hidden;
  background-color: #fff;

  @media (max-width: $layout-breakpoint-mobile) {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 10px 15px 10px 18px;
    border-bottom: 1px solid #e1e4e7;
    margin-bottom: 0px;
  }
}

.card-list-header__filter-button {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: $card-list-header-height;
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

<template>
  <div class="card-container-header">
    <SortOptionContainer
      :options="sortOptions"
      :selectedValue="ord"
      @select="fetchUpdateOrd($event)"
    />
  </div>
</template>

<script>
import SortOptionContainer from '@/components/SortOptionContainer.vue';
import { SortOptions, SORT_OPTIONS_NAME_MAP } from '../constant';
import { getEnumValues } from '@/utils/enum';
import { mapActions, mapState } from 'vuex';
import { FETCH_UPDATE_ORD } from '@/store/types';

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
</style>

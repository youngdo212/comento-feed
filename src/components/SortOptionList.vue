<template>
  <div class="sort-option-list">
    <SortOptionListItem
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :title="option.title"
      :selected="option.value === selectedValue"
      @option-click="onClick"
    />
  </div>
</template>

<script>
import SortOptionListItem from '@/components/SortOptionListItem.vue';

export default {
  name: 'SortOptionList',
  components: {
    SortOptionListItem
  },
  props: {
    options: Array,
    selectedValue: String
  },
  methods: {
    onClick(value) {
      this.$emit('select', value);
    }
  }
};
</script>

<style lang="scss" scoped>
.sort-option-list {
  display: flex;
  align-items: center;
  height: $card-list-header-height;
  float: left;
}
</style>

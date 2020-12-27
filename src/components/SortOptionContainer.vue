<template>
  <div class="sort-option-container">
    <SortOption
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :title="option.title"
      :selected="option.value === selectedValue"
      @click="onClick"
    />
  </div>
</template>

<script>
import SortOption from '@/components/SortOption.vue';

export default {
  name: 'SortOptionContainer',
  components: {
    SortOption
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
.sort-option-container {
  display: flex;
  align-items: center;
  height: $card-container-header-height;
  float: left;
}
</style>

<template>
  <div :class="classObject" @click="$emit('optionClick', value)">
    <div class="sort-option__flag" />
    <div class="sort-option__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'SortOption',
  props: {
    title: String,
    value: String,
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return {
        'sort-option': true,
        'sort-option--selected': this.selected
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.sort-option {
  display: flex;
  align-items: center;
  margin-right: 13px;
  cursor: pointer;
}

.sort-option__flag {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #e1e4e7;

  .sort-option--selected & {
    background-color: $main-color;
  }
}

.sort-option__title {
  font-size: 13px;
  line-height: 1.92;
  color: #adb5bd;

  .sort-option--selected & {
    color: #495057;
  }
}
</style>

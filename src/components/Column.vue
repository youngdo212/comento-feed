<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column'
};
</script>

<style lang="scss">
.column {
  float: left;
}
</style>

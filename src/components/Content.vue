<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content'
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0px calc((100vw - #{$main-width}) / 2);
  overflow: hidden;

  @media (max-width: $layout-breakpoint-mobile) {
    padding: 0px;
  }
}
</style>

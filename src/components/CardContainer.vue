<template>
  <div class="card-container">
    card container
  </div>
</template>

<script>
export default {
  name: 'CardContainer'
};
</script>

<style lang="scss" scoped>
.card-container {
  float: right;
  width: $card-container-width;

  @media (max-width: $layout-breakpoint-mobile) {
    width: 100%;
  }
}
</style>

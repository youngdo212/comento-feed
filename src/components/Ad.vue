<template>
  <div class="ad">
    This is ad component
  </div>
</template>

<script>
export default {
  name: 'Ad',
  props: {
    title: String,
    contents: String,
    img: String
  }
};
</script>

<style lang="scss" scoped>
.ad {
  background-color: #ffffff;
}
</style>

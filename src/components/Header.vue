<template>
  <div class="header">
    <div class="header__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0px calc((100vw - #{$main-width}) / 2);
  margin-bottom: 50px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

.header__title {
  font-family: NotoSansCJKKR;
  font-size: 16px;
  line-height: 1.56;
  color: #212529;
}
</style>

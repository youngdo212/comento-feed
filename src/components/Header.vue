<template>
  <div class="header">
    <div class="header__back-button" v-if="backIcon" @click="$emit('goback')">
      &lt;
    </div>
    <div class="header__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  emits: ['goback'],
  props: {
    title: String,
    backIcon: Boolean
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

  @media (max-width: $layout-breakpoint-mobile) {
    height: 45px;
    padding: 0px 15px;
    margin-bottom: 3px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
  }
}

.header__back-button {
  width: 13px;
  height: 22px;
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  color: #282c30;
  margin-right: 10px;
  cursor: pointer;
}

.header__title {
  font-family: NotoSansCJKKR;
  font-size: 16px;
  line-height: 1.56;
  color: #212529;
}
</style>

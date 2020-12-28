<template>
  <div class="post-detail">
    <div class="post-detail__title">{{ title }}</div>
    <div class="post-detail__contents">{{ contents }}</div>
    <div class="post-detail__date">{{ date }}</div>
  </div>
</template>

<script>
import { formatISOString } from '../utils/data';

export default {
  name: 'PostDetail',
  props: {
    createdAt: String,
    title: String,
    contents: String
  },
  computed: {
    date() {
      return formatISOString(this.createdAt);
    }
  }
};
</script>

<style lang="scss" scoped>
.post-detail {
  padding: 20px 30px;
  border: 1px solid $main-color;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #fff;

  @media (max-width: $layout-breakpoint-mobile) {
    padding: 20px 15px;
    border: none;
    border-radius: 0px;
    margin-bottom: 10px;
  }
}

.post-detail__title {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #282c30;
  margin-bottom: 5px;

  @media (max-width: $layout-breakpoint-mobile) {
    padding-top: 20px;
    border-top: 1px solid $main-color;
  }
}

.post-detail__contents {
  font-size: 16px;
  line-height: 1.56;
  color: #495057;
  margin-bottom: 15px;
}

.post-detail__date {
  font-size: 13px;
  line-height: 1.92;
  color: #adb5bd;

  @media (max-width: $layout-breakpoint-mobile) {
    padding-bottom: 20px;
    border-bottom: 1px solid $main-color;
  }
}
</style>

<template>
  <div class="ad">
    <div class="ad__header">sponsored</div>
    <div class="ad__body">
      <img class="ad__img" :src="imgUrl" />
      <div class="ad__title">{{ title }}</div>
      <div class="ad__contents">{{ contents }}</div>
    </div>
  </div>
</template>

<script>
import { IMG_BASE_URL } from '../constant';

export default {
  name: 'Ad',
  props: {
    title: String,
    contents: String,
    img: String
  },
  computed: {
    imgUrl() {
      return `${IMG_BASE_URL}/${this.img}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.ad {
  background-color: #ffffff;
}

.ad__header {
  font-size: 13px;
  line-height: 1.92;
  color: #adb5bd;
  margin-bottom: 15.5px;
}

.ad__img {
  float: left;
  width: 310px;
  height: 179px;
  background: #ccc;
  margin: 0 29.5px 0 0;

  @media (max-width: $layout-breakpoint-mobile) {
    float: none;
    width: 100%;
    height: 179px;
    margin: 0 0 15.5px 0;
  }
}

.ad__title {
  height: 56px;
  margin-bottom: 10px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #282c30;

  @media (max-width: $layout-breakpoint-mobile) {
    margin-bottom: 5px;
  }
}

.ad__contents {
  height: 100px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 1.56;
  color: #495057;

  @media (max-width: $layout-breakpoint-mobile) {
    height: 50px;
  }
}
</style>

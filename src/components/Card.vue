<template>
  <div class="card">
    <Post v-if="isPost" v-bind="data" />
    <Ad v-else-if="isAd" v-bind="data" />
  </div>
</template>

<script>
import Post from './Post';
import Ad from './Ad';
import { CardType } from '../constant';
import { getEnumValues } from '../utils/enum';

export default {
  name: 'Card',
  components: {
    Post,
    Ad
  },
  props: {
    type: {
      validator(value) {
        return getEnumValues(CardType).indexOf(value) !== -1;
      }
    },
    data: Object
  },
  computed: {
    isPost() {
      return this.type === CardType.Post;
    },
    isAd() {
      return this.type === CardType.Ad;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: solid 1px $card-border-color;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 20px 30px;
  background-color: #ffffff;
  overflow: hidden;

  @media (max-width: $layout-breakpoint-mobile) {
    border: none;
    padding: 20px 15px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;
  }
}
</style>

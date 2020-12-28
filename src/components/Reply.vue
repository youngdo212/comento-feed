<template>
  <div class="reply">
    <div class="reply__user-name">{{ user.name }}</div>
    <div class="reply__contents">{{ contents }}</div>
    <div class="reply__date">{{ date }}</div>
  </div>
</template>

<script>
import { formatISOString } from '../utils/data';

export default {
  name: 'Reply',
  props: {
    user: Object,
    contents: String,
    createdAt: String
  },
  computed: {
    date() {
      return formatISOString(this.createdAt);
    }
  }
};
</script>

<style lang="scss" scoped>
.reply {
  padding: 20px 30px;
  margin-bottom: 30px;
  border: solid 1px #e1e4e7;
  border-radius: 5px;
  background-color: #ffffff;

  @media (max-width: $layout-breakpoint-mobile) {
    margin: 0px 15px 30px 15px;
    border-right: none;
    border-left: none;
    padding: 20px 0px;
  }
}

.reply__user-name {
  font-size: 16px;
  line-height: 1.56;
  color: #7e848a;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e1e4e7;
}

.reply__contents {
  font-size: 16px;
  line-height: 1.56;
  color: #495057;
  margin-bottom: 15px;
}

.reply__date {
  font-size: 13px;
  line-height: 1.92;
  color: #adb5bd;
}
</style>

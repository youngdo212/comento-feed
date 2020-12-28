<template>
  <div class="post">
    <div class="post__header">
      <div class="post__category-id">{{ categoryName }}</div>
      <div class="post__id">{{ id }}</div>
    </div>
    <div class="post__body">
      <div class="post__info">
        <div class="post__user-id">{{ userId }}</div>
        <div class="post__date">{{ date }}</div>
      </div>
      <div class="post__title">{{ title }}</div>
      <div class="post__contents">{{ contents }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { formatISOString } from '../utils/data';

export default {
  name: 'Post',
  props: {
    id: Number,
    categoryId: Number,
    userId: Number,
    createdAt: String,
    title: String,
    contents: String
  },
  computed: {
    ...mapState({
      category: state => state.home.category
    }),
    date() {
      return formatISOString(this.createdAt);
    },
    categoryName() {
      const category = this.category.find(item => item.id === this.categoryId);
      return category.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  background-color: #ffffff;
}

.post__header {
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid $card-border-color;
  overflow: hidden;
}

.post__category-id {
  float: left;
  color: #7e848a;
  font-size: 13px;
  line-height: 1.92;
}

.post__id {
  float: right;
  color: #adb5bd;
  font-size: 13px;
  line-height: 1.92;
}

.post__info {
  display: flex;
  margin-bottom: 15px;
}

.post__user-id {
  font-size: 13px;
  line-height: 1.92;
  color: $main-color;
  margin-right: 12px;
}
.post__date {
  font-size: 13px;
  line-height: 1.92;
  color: #495057;

  &::before {
    content: '|';
    color: $card-border-color;
    margin-right: 10px;
  }

  @media (max-width: $layout-breakpoint-mobile) {
    display: none;
  }
}

.post__title {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #282c30;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post__contents {
  font-size: 16px;
  line-height: 1.56;
  color: #495057;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

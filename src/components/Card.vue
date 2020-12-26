<template>
  <div class="card">
    <div class="card__header">
      <div class="card__category-id">{{ categoryId }}</div>
      <div class="card__id">{{ id }}</div>
    </div>
    <div class="card__body">
      <div class="card__info">
        <div class="card__user-id">{{ userId }}</div>
        <div class="card__created-at">{{ createdAtFormat }}</div>
      </div>
      <div class="card__title">{{ title }}</div>
      <div class="card__contents">{{ contents }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: Number,
    categoryId: Number,
    userId: Number,
    createdAt: String,
    title: String,
    contents: String
  },
  computed: {
    createdAtFormat() {
      return this.createdAt.substring(0, 10);
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

  @media (max-width: $layout-breakpoint-mobile) {
    border: none;
    padding: 20px 15px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;
  }
}

.card__header {
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid $card-border-color;
  overflow: hidden;
}

.card__category-id {
  float: left;
  color: #7e848a;
  font-size: 13px;
  line-height: 1.92;
}

.card__id {
  float: right;
  color: #adb5bd;
  font-size: 13px;
  line-height: 1.92;
}

.card__info {
  display: flex;
  margin-bottom: 15px;
}

.card__user-id {
  font-size: 13px;
  line-height: 1.92;
  color: $main-color;
  margin-right: 12px;
}
.card__created-at {
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

.card__title {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #282c30;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__contents {
  font-size: 16px;
  line-height: 1.56;
  color: #495057;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

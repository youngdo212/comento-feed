<template>
  <div class="detail">
    <Header title="[2020-12-29] 천영도" backIcon />
    <Content>
      <PostDetail v-bind="post" />
      <div class="detail__reply-info">
        <div class="detail__reply-info-label">답변</div>
        <div class="detail__reply-length">{{ post.reply.length }}</div>
      </div>
      <Reply v-for="reply in post.reply" :key="reply.id" v-bind="reply" />
    </Content>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import PostDetail from '@/components/PostDetail.vue';
import Reply from '@/components/Reply.vue';
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  components: {
    Header,
    Content,
    PostDetail,
    Reply
  },
  computed: {
    ...mapState({
      post: state => state.detail.post
    })
  }
};
</script>

<style lang="scss" scoped>
.detail__reply-info {
  display: flex;
  align-items: center;
  height: 25px;
  margin-bottom: 10px;

  @media (max-width: $layout-breakpoint-mobile) {
    padding: 0px 15px;
    margin-bottom: 10px;
  }
}

.detail__reply-info-label {
  font-size: 16px;
  line-height: 1.56;
  color: #495057;
  margin-right: 6px;
}

.detail__reply-length {
  font-size: 16px;
  line-height: 1.56;
  color: $main-color;
}
</style>

<template>
  <div class="detail">
    <Header title="[2020-12-29] 천영도" backIcon @goback="$router.go(-1)" />
    <Content v-if="post">
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
import { mapActions, mapMutations, mapState } from 'vuex';
import { FETCH_POST, SET_VALUE } from '@/store/modules/detail/types';

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
  },
  methods: {
    ...mapMutations({
      setValue: SET_VALUE
    }),
    ...mapActions({
      fetchPost: FETCH_POST
    })
  },
  created() {
    const id = Number(this.$route.params.id);
    this.fetchPost(id);
  },
  unmounted() {
    this.setValue({
      key: 'post',
      value: null
    });
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

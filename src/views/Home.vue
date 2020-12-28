<template>
  <div class="home">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      <User />
      <CardContainer />
    </Content>
    <Modal
      title="필터"
      confirmText="저장하기"
      @confirm="onConfirm"
      @close="onClose"
      :visible="true"
    >
      this is test modal
    </Modal>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import User from '@/components/User.vue';
import CardContainer from '@/components/CardContainer.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    User,
    CardContainer,
    Modal
  },
  methods: {
    onClose() {
      console.log('close');
    },
    onConfirm() {
      console.log('confirm');
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  @media (max-width: $layout-breakpoint-mobile) {
    background-color: #f4f5f7;
  }
}
</style>

<template>
  <div class="home">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      <User />
      <CardContainer />
    </Content>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import User from '@/components/User.vue';
import CardContainer from '@/components/CardContainer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    User,
    CardContainer
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

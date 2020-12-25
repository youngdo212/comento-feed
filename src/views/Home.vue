<template>
  <div class="home">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      <Column :style="{ width: '235px', marginRight: '40px' }">
        <User />
      </Column>
      <Column :style="{ width: '865px' }">
        <div>feed</div>
      </Column>
    </Content>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Column from '@/components/Column.vue';
import User from '@/components/User.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Column,
    User
  }
};
</script>

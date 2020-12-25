<template>
  <div class="detail">
    <Header title="[2020-12-29] 천영도" />
    <Content>
      {{ $route.params.id }}
    </Content>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'Detail',
  components: {
    Header,
    Content
  }
};
</script>

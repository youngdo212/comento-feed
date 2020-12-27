<template>
  <div class="infinite-scroll" ref="container" />
</template>

<script>
export default {
  name: 'InfiniteScroll',
  emits: ['load'],
  mounted() {
    const observer = getIntersectionOberserver(() => this.$emit('load'), {
      rootMargin: '200px'
    });
    const { container } = this.$refs;

    observer.observe(container);

    // 옵저빙을 취소하는 함수 캐싱
    this.unobserve = () => observer.unobserve(container);
  },
  unmounted() {
    this.unobserve();
  }
};

/**
 * Intersection Observer를 생성한다.
 *
 * @param {function} callback
 * @param {object} options
 * @returns {IntersectionObserver}
 */
function getIntersectionOberserver(callback, options = {}) {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  }, options);
}
</script>

<style lang="scss" scoped>
.infinite-scroll {
  width: 100%;
  height: 10px;
  background: red;
}
</style>

<template>
  <div class="user">
    <div class="user__login-button">로그인</div>
  </div>
</template>

<script>
export default {
  name: 'User'
};
</script>

<style lang="scss" scoped>
.user {
  float: left;
  width: $user-width;
}

.user__login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background: $main-color;
  font-size: 22px;
  color: #ffffff;
  cursor: pointer;
}
</style>

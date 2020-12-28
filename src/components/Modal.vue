<template>
  <div class="modal" v-if="visible" @click.self="$emit('close')">
    <div class="modal__dialog">
      <div class="modal__content">
        <div class="modal__close-button" @click="$emit('close')">X</div>
        <div class="modal__header">
          <div class="modal__title">{{ title }}</div>
        </div>
        <div class="modal__body">
          <slot />
        </div>
        <div class="modal__footer">
          <div class="modal__confirm-button" @click="$emit('confirm')">
            {{ confirmText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: Boolean,
    title: String,
    confirmText: {
      type: String,
      default: '확인'
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal__dialog {
  width: 460px;

  @media (max-width: $layout-breakpoint-mobile) {
    width: 337px;
  }
}

.modal__content {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  padding: 30px;
}

.modal__close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.modal__header {
  height: 32px;
  margin-bottom: 10px;
}

.modal__title {
  font-size: 22px;
  font-weight: bold;
  line-height: 1.45;
  color: #212529;
}

.modal__body {
  margin-bottom: 30px;
}

.modal__footer {
  overflow: hidden;
}

.modal__confirm-button {
  box-sizing: border-box;
  float: right;
  height: 40px;
  padding: 0px 20px;
  font-size: 16px;
  line-height: 2.3;
  color: #ffffff;
  background-color: $main-color;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: $layout-breakpoint-mobile) {
    float: none;
    width: 100%;
    text-align: center;
  }
}
</style>

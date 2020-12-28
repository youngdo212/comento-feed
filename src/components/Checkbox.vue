<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="name"
      :name="name"
      :checked="checked"
    />
    <label class="checkbox__label" :for="name">{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: String,
    checked: Boolean
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  height: 25px;
  margin-bottom: 10px;
}

.checkbox__input {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border: solid 1px #e1e4e7;
  border-radius: 0px;
}

.checkbox__label {
  font-size: 16px;
  line-height: 2;
  color: #495057;
}
</style>

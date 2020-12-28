<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="option in options"
      :key="option"
      :name="option"
      :checked="initialValues.indexOf(option) !== -1"
      @change="onChange($event)"
    />
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
export default {
  name: 'CheckboxGroup',
  components: {
    Checkbox
  },
  emits: ['change'],
  props: {
    options: Array,
    initialValues: Array
  },
  data() {
    return {
      values: [...this.initialValues]
    };
  },
  methods: {
    onChange({ target: { name, checked } }) {
      if (checked) {
        this.values = [...this.values, name];
      } else {
        this.values = this.values.filter(value => value !== name);
      }

      this.$emit('change', [...this.values]);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-group {
}
</style>

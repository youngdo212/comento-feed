<template>
  <Modal
    title="필터"
    confirmText="저장하기"
    @confirm="onConfirm"
    @close="closeModal"
    :visible="isModalVisible"
  >
    <CheckboxGroup
      :options="categoryNames"
      :initialValues="filteredCategoryNames"
      @change="onChange"
    />
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import CheckboxGroup from '@/components/CheckboxGroup.vue';
import { mapMutations, mapState } from 'vuex';
import { CLOSE_MODAL, SET_VALUE } from '@/store/modules/home/types';

export default {
  name: 'Filter',
  components: {
    Modal,
    CheckboxGroup
  },
  emits: ['save'],
  data() {
    return {
      values: null
    };
  },
  computed: {
    ...mapState({
      isModalVisible: state => state.home.isModalVisible,
      category: state => state.home.category,
      filteredCategoryIds: state => state.home.filteredCategoryIds
    }),
    categoryNames() {
      return this.category.map(item => item.name);
    },
    filteredCategoryNames() {
      return this.category
        .filter(item => this.filteredCategoryIds.indexOf(item.id) !== -1)
        .map(item => item.name);
    }
  },
  methods: {
    ...mapMutations({
      closeModal: CLOSE_MODAL
    }),

    /**
     * 선택된 카테고리의 id를 저장하고 모달을 닫는다.
     */
    onConfirm() {
      const filteredCategoryNames = this.values
        ? [...this.values]
        : [...this.filteredCategoryNames];
      const filteredCategoryIds = this.category
        .filter(item => filteredCategoryNames.indexOf(item.name) !== -1)
        .map(item => item.id);

      this.$store.commit(SET_VALUE, {
        key: 'filteredCategoryIds',
        value: filteredCategoryIds
      });
      this.closeModal();
      this.$emit('save');
    },

    /**
     * 변경된 카테고리 이름의 배열을 저장한다.
     *
     * @param {array} values 카테고리 이름의 배열
     */
    onChange(values) {
      this.values = values;
    }
  }
};
</script>

<style lang="scss" scoped></style>

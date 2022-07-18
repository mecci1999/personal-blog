<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TextareaField',

  /**
   * 属性
   */
  props: {
    modelValue: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    rows: {
      type: Number || String,
      default: 2 || '2',
    },
  },

  emits: ['update:modelValue', 'dirty'],

  setup(props, ctx) {
    const vModel = ref('');

    const onChangeTextarea = (event?: any) => {
      const value = event.target.value.trim();

      // if (vModel !== value) {
      //   ctx.emit('dirty');
      // }

      vModel.value = value;

      ctx.emit('update:modelValue', event.target.value.trim());
    };

    return {
      onChangeTextarea,
      vModel,
      ...props,
    };
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<template>
  <div class="textarea-field">
    <textarea
      class="input textarea"
      :value="vModel"
      :placeholder="placeholder"
      :rows="rows"
      @input="onChangeTextarea"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

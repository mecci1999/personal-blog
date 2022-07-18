<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'InputField',

  props: {
    modelValue: {
      type: String,
    },

    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
    },
  },

  /**
   * 事件
   */
  emits: ['update:modelValue', 'dirty', 'onBlur'],

  setup(props, ctx) {
    const vModel = ref('');
    const propsModelValue = computed(() => props.modelValue);

    const onChangeText = (event?: any) => {
      const value = event.target.value.trim();

      // if (vModel !== value) {
      //   ctx.emit('dirty');
      // }

      vModel.value = value;

      ctx.emit('update:modelValue', event.target.value.trim());
    };

    watch(propsModelValue, (newValue: any) => {
      vModel.value = newValue;
    });

    const onBlur = () => {
      ctx.emit('onBlur');
    };

    return {
      ...props,
      onChangeText,
      vModel,
      onBlur,
    };
  },

  components: {},
});
</script>

<template>
  <div class="input-field">
    <input
      class="input text"
      :type="type"
      :value="vModel"
      :placeholder="placeholder"
      @input="onChangeText"
      @blur="onBlur"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

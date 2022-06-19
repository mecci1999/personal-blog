<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AppIcon',

  props:{
    name: {
      type: String,
    },

    color: {
      type: String,
    },

    size: {
      type: [String, Number],
      default: 16,
    },
  },

  setup(props) {
    const store = useStore();

    // 主题
    const theme = store.getters['theme/theme'];

    const appIconStyles = computed(() => {
      let color:string;

      if (props.color) {
        color = props.color;
      } else {
        color = theme === 'dark' ? '#585858' : '#000000';
      }

      return {
        color,
        fontSize: props.size + 'px',
        width: props.size + 'px',
      }
    });


    return {
      ...props,
      appIconStyles,
    }
  },

  components: {},
});
</script>

<template>
  <i class="app-icon" :style="appIconStyles">{{ name }}</i>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

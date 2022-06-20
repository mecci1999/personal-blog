<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const theme = computed(() => store.getters['theme/theme']);

    return {
      theme,
    };
  },

  components: {},
});
</script>

<template>
  <div :class="['blog', theme]">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import AppSearch from '@/components/search/index.vue';

export default defineComponent({
  setup() {
    const store = useStore();

    const theme = computed(() => store.getters['theme/theme']);

    const searchDialogStatus = computed(
      () => store.getters['search/searchDialogStatus'],
    );

    return {
      theme,
      searchDialogStatus,
    };
  },

  components: {
    AppSearch,
  },
});
</script>

<template>
  <div :class="['blog', theme]">
    <router-view />
    <AppSearch v-if="searchDialogStatus" />
  </div>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>

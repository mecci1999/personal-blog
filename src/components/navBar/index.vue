<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import NavMenu from './menu/index.vue';

export default defineComponent({
  name: 'NavBar',

  setup() {
    const store = useStore();
    // appName
    const name = computed(() => store.state.appName);

    return {
      name,
    }
  },

  components: {
    NavMenu
  },
});
</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <div class="nav-bar-left-name">{{ name }}</div>
      <div class="nav-bar-left-title">个人博客</div>
    </div>
    <div class="nav-bar-right">
      <NavMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

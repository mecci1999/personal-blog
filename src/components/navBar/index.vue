<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import NavMenu from './menu/index.vue';

export default defineComponent({
  name: 'NavBar',

  setup() {
    const store = useStore();
    const router = useRouter();
    // appName
    const name = computed(() => store.state.appName);

    const onJumpToHome = () => {
      // 跳转到首页
      router.push({ name: 'home' });
    };

    return {
      name,
      onJumpToHome,
    };
  },

  components: {
    NavMenu,
  },
});
</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-container">
      <div class="nav-bar-container-left">
        <div class="nav-bar-container-left-name" @click="onJumpToHome">
          {{ name }}
        </div>
        <div class="nav-bar-container-left-title" @click="onJumpToHome">
          个人博客
        </div>
      </div>
      <div class="nav-bar-container-right">
        <NavMenu />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

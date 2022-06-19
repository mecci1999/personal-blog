<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import AppIcon from '../../common/app-icon/index.vue';
import NavMenuItem from './item/index.vue';

export default defineComponent({
  name: 'NavMenu',

  setup() {
    const store = useStore();

    // 主题
    const theme = store.getters['theme/theme'];

    const MenuList = [
      {
        icon: 'search',
        text: '搜索',
        path: '',
      },
      {
        icon: 'home',
        text: '首页',
        path: 'home',
      },
      {
        icon: 'explore',
        text: '目录',
        path: '',
      },
      {
        icon: 'chat',
        text: '留言板',
        path: 'comment',
      },
      {
        icon: 'face',
        text: '关于',
        path: 'about',
      },
      {
        icon: theme === 'dark' ? 'wb_sunny' : 'wb_incandescent',
        text: '主题',
        path: '',
      },
    ];

    return {
      MenuList,
    }
  },

  components: {
    AppIcon,
    NavMenuItem,
  },
});
</script>

<template>
  <div class="nav-menu">
    <div class="nav-menu-list">
      <NavMenuItem v-for="item in MenuList" :key="item.text" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

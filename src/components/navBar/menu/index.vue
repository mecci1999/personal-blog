<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { getStroage } from '../../../utils/localStorage';
import AppIcon from '../../common/app-icon/index.vue';
import NavMenuItem from './item/index.vue';

export default defineComponent({
  name: 'NavMenu',

  setup() {
    const store = useStore();

    // 主题
    const theme = getStroage('theme');
    if(theme) {
      store.commit('theme/setTheme', theme);
    }
    const themeIcon = computed(() => store.getters['theme/themeIcon']);

    const MenuList =  [
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
    ];

    // 定义切换主题方法
    const changeTheme = () => {
      const theme = store.getters['theme/theme'] === 'dark' ? 'light' : 'dark';

      store.commit('theme/setTheme', theme);
    };

    return {
      MenuList,
      themeIcon,
      changeTheme,
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
       <div class="nav-menu-list-item" @click="changeTheme">
        <AppIcon :name="themeIcon" size="20" />
        <span class="nav-menu-list-item-name">主题</span>
       </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

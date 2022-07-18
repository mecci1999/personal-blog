<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppIcon from '@/components/common/app-icon/index.vue';
import { computed } from 'vue';

export default defineComponent({
  name: 'NavMenuItem',

  props: {
    item: {
      type: Object,
    },
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    // 定义切换主题方法
    const changeTheme = () => {
      const theme = store.getters['theme/theme'] === 'dark' ? 'light' : 'dark';

      store.commit('theme/setTheme', theme);
    };

    // 是否打开目录菜单
    const showExpolerMenu = ref(false);

    const onClickMenuItem = (icon: string) => {
      switch (icon) {
        case 'explore':
          onClickExplore();
          break;
        case 'home':
          router.push({ name: 'home' });
          break;
        case 'face':
          router.push({ name: 'about' });
          break;
        case 'chat':
          router.push({ name: 'comment' });
          break;
        case 'search':
          // 打开和关闭搜索框
          const searchDialogStatus = computed(
            () => store.getters['search/searchDialogStatus'],
          );
          store.commit('search/changeSearchDialogStatus');
          console.log(searchDialogStatus.value);
          break;
      }
    };

    // 点击目录触发的方法
    const onClickExplore = () => {
      showExpolerMenu.value = !showExpolerMenu.value;
    };

    // 点击跳转路由
    const onClickJumpRouter = (routes: string, params?: string | number) => {
      switch (routes) {
        case 'postTags':
          router.push({ name: routes, params: { tagId: params } });
          break;
        case 'postCategory':
          router.push({ name: routes, params: { typeId: params } });
          break;
        case 'postArticle':
          router.push({ name: routes });
          break;
      }
    };

    return {
      changeTheme,
      showExpolerMenu,
      onClickMenuItem,
      onClickExplore,
      onClickJumpRouter,
    };
  },

  components: {
    AppIcon,
  },
});
</script>

<template>
  <div class="nav-menu-list-item" @click="onClickMenuItem(item?.icon)">
    <AppIcon :name="item?.icon" size="20" />
    <span class="nav-menu-list-item-name">{{ item?.text }}</span>
    <div class="explore-menu" v-if="showExpolerMenu">
      <div class="explore-menu-list" @click="onClickJumpRouter('postArticle')">
        <AppIcon name="import_contacts" size="16" />
        <span>文章列表</span>
      </div>
      <div
        class="explore-menu-list"
        @click.stop="onClickJumpRouter('postCategory', 1)"
      >
        <AppIcon name="dashboard" size="16" />
        <span>全部分类</span>
      </div>
      <div
        class="explore-menu-list"
        @click.stop="onClickJumpRouter('postTags', 1)"
      >
        <AppIcon name="local_offer" size="16" />
        <span>全部标签</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

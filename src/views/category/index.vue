<script lang="ts" setup>
import { computed } from 'vue';
import NavBar from '@/components/navBar/index.vue';
import PostIndex from '@/components/post/index/index.vue';
import { posts, postType } from '@/api/test/index';
import PostTabBar from '@/components/post/tabs/index.vue';
import AppFooter from '@/components/footer/index.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const routes = useRoute();
const router = useRouter();
const store = useStore();

// 当前分类
const type = postType.find(
  (item) => item.id === parseInt(`${routes.params.typeId}`, 10),
);
store.commit('post/setCurrentPostType', type);

const currentTypeId = computed(() => store.getters['post/currentPostType'].id);
const currentTypeName = computed(
  () => store.getters['post/currentPostType'].name,
);

// // 点击切换分类
// const onClickChangeType = (id: any) => {
//   // 根据当前id获取当前标签数据
//   const type = postType.find((item) => item.id === id);
//   store.commit('post/setCurrentPostTag', type);
//   router.replace({
//     name: 'postCategory',
//     params: { typeId: `${currentTypeId.value}` },
//   });
// };
</script>

<template>
  <div class="app-category">
    <NavBar />
    <div class="app-category-container">
      <div class="app-category-container-header">
        <PostTabBar :types="postType" />
      </div>
      <div class="app-category-container-index">
        <PostIndex :posts="posts" :title="currentTypeName" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

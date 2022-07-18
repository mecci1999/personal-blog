<script lang="ts" setup>
import { computed } from 'vue';
import NavBar from '@/components/navBar/index.vue';
import PostIndex from '@/components/post/index/index.vue';
import { posts, tags } from '@/api/test/index';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppFooter from '@/components/footer/index.vue';

const routes = useRoute();
const router = useRouter();
const store = useStore();

// 当前标签
const tag = tags.find(
  (item) => item.id === parseInt(`${routes.params.tagId}`, 10),
);
store.commit('post/setCurrentPostTag', tag);

const tagItemClasses = (id: any) => [
  'app-tags-container-header-item',
  { selected: id === parseInt(`${currentTagId.value}`, 10) },
];

const currentTagId = computed(() => store.getters['post/currentPostTag'].id);
const currentTagName = computed(
  () => store.getters['post/currentPostTag'].name,
);

// 点击切换标签
const onClickChangeTagId = (id: any) => {
  // 根据当前id获取当前标签数据
  const tag = tags.find((item) => item.id === id);
  store.commit('post/setCurrentPostTag', tag);
  router.replace({
    name: 'postTags',
    params: { tagId: `${currentTagId.value}` },
  });
};
</script>

<template>
  <div class="app-tags">
    <NavBar />
    <div class="app-tags-container">
      <div class="app-tags-container-header">
        <div
          :class="tagItemClasses(tag.id)"
          v-for="tag in tags"
          :key="tag.id"
          @click.stop="onClickChangeTagId(tag.id)"
        >
          {{ tag.name }}
          <sup class="app-tags-container-header-item-amount">{{
            tag.amount
          }}</sup>
        </div>
      </div>
      <div class="app-tags-container-index">
        <PostIndex :posts="posts" :title="currentTagName" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import PostListItem from './item/inedx.vue';
import { PostDataType } from '@/types/interface'

export default defineComponent({
  name: 'PostList',

  props: {
    posts: {
      type: Array<PostDataType>,
    },
  },

  setup() {
    return {};
  },

  components: {
    PostListItem,
  },
});
</script>

<template>
  <div class="post-list">
    <div class="post-list-group">
      <PostListItem v-for="post in posts" :key="post.id" :item="post" />
    </div>
    <div class="post-list-bottom-tip">
      <span class="post-list-bottom-tip-text">已经到底啦~</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

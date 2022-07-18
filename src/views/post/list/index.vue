<script lang="ts" setup>
import NavBar from '@/components/navBar/index.vue';
import AppFooter from '@/components/footer/index.vue';
import PostIndex from '@/components/post/index/index.vue';
import { posts } from '@/api/test/index';
</script>

<template>
  <div class="post-article">
    <NavBar />
    <div class="post-article-container">
      <PostIndex :posts="posts" title="文章 - 30" />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

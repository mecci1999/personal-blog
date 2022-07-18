<script lang="ts" setup>
import { defineComponent } from 'vue';
import CommentPanel from '@/components/comment/index.vue';
import NavBar from '@/components/navBar/index.vue';
import AppFooter from '@/components/footer/index.vue';
</script>

<template>
  <div class="app-comment">
    <NavBar />
    <div class="app-comment-container">
      <CommentPanel />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

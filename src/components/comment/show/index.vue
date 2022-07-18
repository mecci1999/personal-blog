<script lang="ts" setup>
import CommentList from '@/components/comment/list/index.vue';

// 评论接口数据
const comment = [
  {
    id: 1,
    avatarImgUrl: '',
    name: ':)',
    email: '664751829@qq.com',
    content: '测试一下~',
    postId: 3,
    parentId: null,
    os: 'Windows 10',
    browser: 'Chrome',
    address: '江西',
    status: 0,
    created: '2022-06-29',
    updated: '2022-06-29',
  },
  {
    id: 2,
    avatarImgUrl: '',
    name: ':)',
    email: '664751829@qq.com',
    content: '测试一下~',
    postId: 3,
    parentId: null,
    os: 'macOS Catalina',
    browser: 'Microsoft Edge',
    address: '江西',
    status: 0,
    created: '2022-06-29',
    updated: '2022-06-29',
  },
  {
    id: 3,
    avatarImgUrl: '',
    name: ':)',
    email: '664751829@qq.com',
    content: '测试一下~',
    postId: 3,
    parentId: null,
    os: 'iOS 15.4',
    browser: 'Chrome',
    address: '江西',
    status: 0,
    created: '2022-06-29',
    updated: '2022-06-29',
  },
  {
    id: 4,
    avatarImgUrl: '',
    name: ':)',
    email: '664751829@qq.com',
    content: '测试一下~',
    postId: 3,
    parentId: null,
    os: 'Linux',
    browser: 'Chrome',
    address: '江西',
    status: 0,
    created: '2022-06-29',
    updated: '2022-06-29',
  },
  {
    id: 5,
    avatarImgUrl: '',
    name: ':)',
    email: '664751829@qq.com',
    content: '测试一下~',
    postId: 3,
    parentId: null,
    os: 'Android',
    browser: 'Chrome',
    address: '江西',
    status: 0,
    created: '2022-06-29',
    updated: '2022-06-29',
  },
];
</script>

<template>
  <div class="comment-show">
    <div class="comment-show-title">
      <span class="comment-show-title-text">共10条评论</span>
    </div>
    <div class="comment-show-list">
      <CommentList :list="comment" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

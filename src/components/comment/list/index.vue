<script lang="ts" setup>
import { defineProps } from 'vue';
import CommentListItem from './item/index.vue';
import { CommentDataType } from '@/types/interface';

// 属性
const props = defineProps({
  list: {
    type: Array<CommentDataType>,
  },
});
</script>

<template>
  <div class="comment-list">
    <CommentListItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

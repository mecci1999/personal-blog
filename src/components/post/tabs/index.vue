<script lang="ts" setup>
import { defineProps } from 'vue';
import PostTab from './tab/index.vue';
import { TypesAndTagsDataType } from '@/types/interface';

const props = defineProps({
  types: {
    type: Array<TypesAndTagsDataType>,
  },
});
</script>

<template>
  <div class="post-tab-bar">
    <PostTab :tabs="types" />
    <div class="post-tab-bar-more">更多</div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

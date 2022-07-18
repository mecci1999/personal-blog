<script lang="ts" setup>
import { defineProps } from 'vue';
import { TypesAndTagsDataType } from '@/types/interface'

const props = defineProps({
  tags: {
    type: Array<TypesAndTagsDataType>,
  },
});
</script>

<template>
  <div class="tags-list">
    <div class="tags-list-title">标签</div>
    <div class="tags-list-item" v-for="tag in tags" :key="tag?.id">
      #{{ tag?.name }}
      <sup class="tags-list-item-amount">{{ tag?.amount }}</sup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

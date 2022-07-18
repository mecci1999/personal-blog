<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Array,
  },
});
</script>

<template>
  <div class="archive-list">
    <div class="archive-list-item" v-for="item in items" :key="item?.date">
      <div class="archive-list-item-link">
        <div class="archive-list-item-link-date">{{ item?.date }}</div>
        <div class="archive-list-item-link-count">
          <span class="archive-list-item-link-count-amount">{{
            item?.count
          }}</span>
          <span class="archive-list-item-link-count-unit">篇</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

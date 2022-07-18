<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <span class="post-tag"> #{{ item?.name }} </span>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import PostTag from '@/components/post/tag/index.vue';

// 属性
const props = defineProps({
  item: {
    type: Object,
  },
});

const router = useRouter();
const onClickPostListItem = (id: number) => {
  router.push({ name: 'postShow', params: { postId: id } });
};
</script>

<template>
  <div class="post-list-item" @click="onClickPostListItem(item?.id)">
    <div class="post-list-item-media">
      <img
        class="post-list-item-media-img"
        src="../../../../../src/assets/image/post_media.png"
      />
    </div>
    <div class="post-list-item-types">
      <div
        class="post-list-item-types-item"
        v-for="type in item?.types"
        :key="type.id"
      >
        {{ type.name }}
      </div>
    </div>
    <div class="post-list-item-content">
      <div class="post-list-item-content-main">
        <div class="post-list-item-content-main-title">
          {{ item?.title }}
        </div>
        <div class="post-list-item-content-main-text">
          {{ item?.description }}
        </div>
      </div>
      <div class="post-list-item-content-bottom">
        <div class="post-list-item-content-bottom-tags">
          <PostTag v-for="tag in item?.tags" :key="tag.id" :item="tag" />
        </div>
        <div class="post-list-item-content-bottom-date">4天前</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

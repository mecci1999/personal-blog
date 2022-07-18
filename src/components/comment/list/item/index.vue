<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue';
import { CommentDataType } from '@/types/interface';

const props = defineProps({
  item: {
    type: Object,
  },
});

// 默认头像地址
const avatarImgUrl = ref('../../../../src/assets/icon/account-black-32px.svg');

const commentAvatarImgClasses = computed(() => {
  return [
    'comment-list-item-avatar-img',
    {
      default:
        avatarImgUrl.value ===
        '../../../../src/assets/icon/account-black-32px.svg',
    },
  ];
});

// 判断当前评论的作者是否为博主
const isAdmin = props.item?.userId === 1;
</script>

<template>
  <div class="comment-list-item">
    <div class="comment-list-item-avatar">
      <img
        :class="commentAvatarImgClasses"
        :src="item?.avatarImgUrl || avatarImgUrl"
      />
    </div>
    <div class="comment-list-item-container">
      <div class="comment-list-item-container-header">
        <div class="comment-list-item-container-header-name">
          {{ item?.name }}
        </div>
        <div class="comment-list-item-container-header-card" v-if="isAdmin">
          作者
        </div>
        <div class="comment-list-item-container-header-time">
          {{ item?.updated || item?.created }}
        </div>
      </div>
      <div class="comment-list-item-container-content">
        <span class="comment-list-item-container-content-text">
          {{ item?.content }}</span
        >
      </div>
      <div class="comment-list-item-container-footer">
        <div class="comment-list-item-container-footer-address">
          <i class="comment-list-item-container-footer-address-icon"></i>
          {{ item?.address }}
        </div>
        <div class="comment-list-item-container-footer-os">
          <i class="comment-list-item-container-footer-os-icon"></i
          >{{ item?.os }}
        </div>
        <div class="comment-list-item-container-footer-browser">
          <i class="comment-list-item-container-footer-browser-icon"></i>
          {{ item?.browser }}
        </div>
      </div>
    </div>
    <div class="comment-list-item-tool">
      <div class="comment-list-item-tool-reply"></div>
      <div class="comment-list-item-tool-unfold"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PostShowInfo',

  props: {
    post: {
      type: Object,
    },
  },

  setup(props) {
    const store = useStore();

    return {
      ...props,
    };
  },

  components: {},
});
</script>

<template>
  <div class="post-show-info">
    <!-- <div class="post-show-info-option"></div> -->
    <!-- <div class="post-show-info-item"> -->
    <div class="post-show-info-created">
      <i class="post-show-info-created-icon"></i>
      <span class="post-show-info-created-text"
        >发布日期：{{ post.created }}</span
      >
    </div>
    <div class="post-show-info-updated">
      <i class="post-show-info-updated-icon"></i>
      <span class="post-show-info-updated-text"
        >更新日期：{{ post.updated }}</span
      >
    </div>
    <div class="post-show-info-word">
      <i class="post-show-info-word-icon"></i>
      <span class="post-show-info-word-text"
        >文章字数：{{ post.wordAmount }}</span
      >
    </div>
    <div class="post-show-info-read">
      <i class="post-show-info-read-icon"></i>
      <span class="post-show-info-read-text"
        >阅读时长：{{ post.readTime }}</span
      >
    </div>
    <div class="post-show-info-access">
      <i class="post-show-info-access-icon"></i>
      <span class="post-show-info-access-text">
        访问量：{{ post.accessAmount }}</span
      >
    </div>
    <div class="post-show-info-comment">
      <i class="post-show-info-comment-icon"></i>
      <span class="post-show-info-comment-text">
        评论量：{{ post.commentAmount }}</span
      >
    </div>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const currentIsFirstPost = computed(
  () => store.getters['post/currentIsFirstPost'],
);

const currentIsEndPost = computed(() => store.getters['post/currentIsEndPost']);

const getForwardPost = computed(() => store.getters['post/getForwardPost']);

const getBackPost = computed(() => store.getters['post/getBackPost']);

const onClickForwardJump = () => {
  // 跳转到前一篇博客
  router.replace({
    name: 'postShow',
    params: { postId: getForwardPost.value.id },
  });
};

const onClickBackJump = () => {
  // 跳转到后一篇博客
  router.replace({
    name: 'postShow',
    params: { postId: getBackPost.value.id },
  });
};
</script>

<template>
  <div class="post-navigator">
    <div
      class="post-navigator-forward"
      v-if="!currentIsFirstPost"
      @click="onClickForwardJump"
    >
      <img class="post-navigator-forward-img" src="@/assets/image/git.png" />
      <div class="post-navigator-forward-shadow"></div>
      <div class="post-navigator-forward-text">
        <div class="post-navigator-forward-text-top">上一篇</div>
        <div class="post-navigator-forward-text-bottom">
          {{ getForwardPost?.title }}
        </div>
      </div>
    </div>
    <div
      class="post-navigator-back"
      v-if="!currentIsEndPost"
      @click="onClickBackJump"
    >
      <img
        class="post-navigator-back-img"
        src="@/assets/image/r_statistics.jpeg"
      />
      <div class="post-navigator-back-shadow"></div>
      <div class="post-navigator-back-text">
        <span class="post-navigator-back-text-top">下一篇</span>
        <span class="post-navigator-back-text-bottom">{{
          getBackPost?.title
        }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

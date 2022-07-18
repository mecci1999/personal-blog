<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import NavBar from '@/components/navBar/index.vue';
import UserInfo from '@/components/user/info/index.vue';
import PostShowInfo from '@/components/post/show/info/index.vue';
import PostShowContent from '@/components/post/show/content/index.vue';
import PostShowFooter from '@/components/post/show/footer/index.vue';
import { useRoute } from 'vue-router';
import CommentPanel from '@/components/comment/index.vue';
import { APP_CLIENT_BASE_URL } from '@/config';
import AppFooter from '@/components/footer/index.vue';
import PostNavigator from '@/components/post/navigator/index.vue';
import { post } from '@/api/test/index';

export default defineComponent({
  name: 'PostShow',

  setup() {
    let time = ref('');
    let date: any;
    let style = reactive({
      backgroundImage: `url(${post.bgImgUrl})`,
    });

    // 挂载时置顶
    onMounted(() => {
      window.scrollTo({ top: 0 });
    });

    const route = useRoute();
    const link = APP_CLIENT_BASE_URL + route.path;

    return {
      style,
      time,
      post,
      link,
    };
  },

  components: {
    NavBar,
    UserInfo,
    PostShowInfo,
    PostShowContent,
    PostShowFooter,
    CommentPanel,
    AppFooter,
    PostNavigator,
  },
});
</script>

<template>
  <div class="post-show">
    <header class="post-show-header" :style="style">
      <NavBar />
      <div class="post-show-header-shadow"></div>
      <div class="post-show-header-info">
        <div class="post-show-header-info-option">
          <div
            class="post-show-header-info-option-type"
            v-for="type in post.types"
            :key="type.id"
          >
            {{ type.name }}
          </div>
          <div
            class="post-show-header-info-option-tag"
            v-for="tag in post.tags"
            :key="tag.id"
          >
            #{{ tag.name }}
          </div>
        </div>
        <h1 class="post-show-header-info-title">{{ post.title }}</h1>
        <PostShowInfo :post="post" />
      </div>
    </header>
    <main class="post-show-main">
      <div class="post-show-main-container">
        <PostShowContent :post="post" />
      </div>
      <div class="post-show-main-line"></div>
      <div class="post-show-main-footer">
        <PostShowFooter :link="link" />
      </div>
    </main>
    <CommentPanel />
    <PostNavigator />
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import NavBar from '@/components/navBar/index.vue';
import AppIcon from '@/components/common/app-icon/index.vue';
import UserInfo from '@/components/user/info/index.vue';
import PostList from '@/components/post/list/index.vue';
import AppFooter from '@/components/footer/index.vue';
import {
  changeBackgroundImageByTime,
  getCurrnetTime,
} from '@/utils/changeBackgroundImage';
import PostTabBar from '@/components/post/tabs/index.vue';
import {
  postType,
  tags,
  info,
  postAmount,
  posts,
  users,
} from '@/api/test/index';
import TagsList from '@/components/post/tag/list/index.vue';
import AppInfo from '@/components/common/info/index.vue';
import ArchiveList from '@/components/common/archive-list/index.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AppHome',

  setup() {
    const onClickScrollDown = () => {
      document
        .getElementById('positon')
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    let time = ref('');
    let date: any;
    let style = reactive({
      backgroundImage: '',
    });

    const store = useStore();
    store.commit('post/setCurrentPostType', { id: 1, name: '首页' });

    onMounted(async () => {
      date = setInterval(() => {
        time.value = getCurrnetTime();
        style.backgroundImage = changeBackgroundImageByTime(
          time.value.slice(0, 2),
        );

        clearInterval(date);
      }, 1000);
    });

    return {
      onClickScrollDown,
      users,
      posts,
      style,
      postType,
      tags,
      info,
      postAmount,
    };
  },

  components: {
    NavBar,
    AppIcon,
    UserInfo,
    PostList,
    AppFooter,
    PostTabBar,
    TagsList,
    AppInfo,
    ArchiveList,
  },
});
</script>

<template>
  <div class="app-home">
    <NavBar />
    <div class="bg" :style="style">
      <div class="bg-container">
        <span class="bg-container-title">趁现在还年轻</span>
        <div class="bg-container-scroll-down" @click="onClickScrollDown">
          <AppIcon name="keyboard_arrow_down" size="32" color="#eee" />
        </div>
      </div>
    </div>
    <div id="positon"></div>
    <main id="main" class="app-main">
      <div class="app-main-container">
        <div class="app-main-container-left">
          <UserInfo :user="users" />
          <TagsList :tags="tags" />
          <ArchiveList :items="postAmount" />
          <AppInfo :item="info" />
        </div>
        <div class="app-main-container-right">
          <PostTabBar :types="postType" />
          <PostList :posts="posts" />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

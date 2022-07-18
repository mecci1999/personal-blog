<script lang="ts" setup>
import { useStore } from 'vuex';
import AppIcon from '../common/app-icon/index.vue';
import { searchResultDataType } from '@/api/test/index';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const onClickCloseSearchDialog = () =>
  store.commit('search/changeSearchDialogStatus');

// 点击搜索内容跳转到对应博客
const onClickJumpToPost = (id: number) => {
  router.push({ name: 'postShow', params: { postId: id } });
  store.commit('search/changeSearchDialogStatus');
};
</script>

<template>
  <div class="app-search">
    <div class="app-search-dialog">
      <div class="app-search-dialog-header">
        <div class="app-search-dialog-header-title">搜索</div>
        <div
          class="app-search-dialog-header-button"
          @click.stop="onClickCloseSearchDialog"
        >
          <AppIcon name="clear" size="24" />
        </div>
      </div>
      <div class="app-search-dialog-panel">
        <div class="app-search-dialog-panel-input">
          <div class="app-search-dialog-panel-input-box">
            <input
              type="text"
              placeholder="输入关键词快速查找"
              role="textbox"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              class="input-field"
            />
          </div>
        </div>
      </div>
      <div class="app-search-dialog-search-result">
        <div class="app-search-dialog-search-result-hits">
          <div
            class="app-search-dialog-search-result-hits-item"
            v-for="item in searchResultDataType"
            :key="item.postId"
            @click="onClickJumpToPost(item.postId)"
          >
            <div class="app-search-dialog-search-result-hits-item-link">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="app-search-dialog-search-result-pagination"></div>
        <div class="app-search-dialog-search-result-status">
          找到 22 条结果，用时 5 毫秒
        </div>
      </div>
    </div>
    <div class="app-search-mask" @click.stop="onClickCloseSearchDialog"></div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

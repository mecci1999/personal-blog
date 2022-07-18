import { Module } from 'vuex';
import { RootState } from '../../index';
import { PostDataType, TypesAndTagsDataType } from '@/types/interface';

export interface PostStoreState {
  loading: boolean;
  post: PostDataType | null;
  posts: Array<PostDataType>;
  currentPostTag: TypesAndTagsDataType | null;
  currentPostType: TypesAndTagsDataType | null;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    post: null,
    posts: [],
    currentPostTag: null,
    currentPostType: null,
  } as PostStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    // 当前内容展示的博客
    post(state) {
      return state.post;
    },

    posts(state) {
      return state.posts;
    },

    // 判断当前博客是否为第一个
    currentIsFirstPost(state) {
      return state.post?.id && state.post?.id === state.posts[0].id;
    },

    // 判断当前博客是否为最后一个
    currentIsEndPost(state) {
      const length = state.posts.length;

      return state.post?.id && state.post?.id === state.posts[length - 1].id;
    },

    // 获取当前博客前一个的博客内容
    getForwardPost(state, getters) {
      // 获取当前博客所在位置
      if (getters.currentIsFirstPost) return;

      const index = state.posts.findIndex((item) => item.id === state.post?.id);

      // 拿到前面的博客
      return state.posts[index - 1];
    },

    // 获取当前博客后一个的博客内容
    getBackPost(state, getters) {
      // 获取当前博客所在位置
      if (getters.currentIsEndPost) return;

      const index = state.posts.findIndex((item) => item.id === state.post?.id);

      // 拿到前面的博客
      return state.posts[index + 1];
    },

    // 获取当前标签
    currentPostTag(state) {
      return state.currentPostTag;
    },

    // 获取当前分类
    currentPostType(state) {
      return state.currentPostType;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPost(state, data) {
      state.post = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },

    setCurrentPostTag(state, data) {
      state.currentPostTag = data;
    },

    setCurrentPostType(state, data) {
      state.currentPostType = data;
    },
  },

  /**
   * 动作
   */
  actions: {},
};

import { Module } from 'vuex';
import { RootState } from '../../index';

export interface SearchStoreState {
  searchDialogStatus: boolean;
}

export const searchStoreModule: Module<SearchStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    searchDialogStatus: false,
  } as SearchStoreState,

  /**
   * 获取器
   */
  getters: {
    searchDialogStatus(state) {
      return state.searchDialogStatus;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    changeSearchDialogStatus(state) {
      state.searchDialogStatus = !state.searchDialogStatus;
    },
  },

  /**
   * 动作
   */
  actions: {},
};

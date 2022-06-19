import { Module } from 'vuex';
import { RootState } from '../../index';

export interface ThemeStoreState {
  theme: string;
}

export const themeStoreModule: Module<ThemeStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    theme: 'light'
  } as ThemeStoreState,

  /**
   * 获取器
   */
  getters: {
    theme(state) {
      return state.theme;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setTheme(state, data) {
      state.theme = data;
    }
  },

  /**
   * 动作
   */
  actions: {

  },
};

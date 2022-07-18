import { Module } from 'vuex';
import { getUserInfo } from '../../../api';
import { RootState } from '../../index';

export interface UserModel {
  id?: number;
  name?: string;
  introduction?: string;
  info?: {
    github?: string;
    qq?: string;
    wechat?: string;
    eMail?: string;
  };
}

export interface UserStoreState {
  loading: boolean;
  user: UserModel | null;
}

export const userStoreModule: Module<UserStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    user: null,
  } as UserStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    user(state) {
      return state.user;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setUser(state, data) {
      state.user = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getUser({ commit }) {
      commit('setLoading', true);
      try {
        const response = await getUserInfo();
        commit('setUser', response.data);
        commit('setLoading', false);
        return response;
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const _error = error as any;
        commit('setLoading', false);
        throw _error.response;
      }
    },
  },
};

import { Module } from 'vuex';
import { RootState } from '../../index';
import { getQQUserInfo } from '@/api/index';

export interface CommentStoreState {
  qqUserInfo: {
    code: number;
    imgurl: string;
    name: string;
    mail: string;
  };
}

export const commentStoreModule: Module<CommentStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    qqUserInfo: {
      code: 0,
      imgurl: '',
      name: '',
      mail: '',
    },
  } as CommentStoreState,

  /**
   * 获取器
   */
  getters: {
    qqUserInfo(state) {
      return state.qqUserInfo;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setQQUserInfo(state, data) {
      state.qqUserInfo = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getQQUserInfo({ commit }, id: string) {
      try {
        const response = await getQQUserInfo(id);

        commit('setQQUserInfo', response.data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const _error = error as any;

        throw _error.response;
      }
    },
  },
};

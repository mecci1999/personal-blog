import { createStore, storeKey } from 'vuex';

export interface RootState {
  appName: string;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: 'Mecci'
  } as RootState,

  modules:{

  },
  
  // 插件
  plugins:[]
});

/**
 * 默认导出
 */
export default store;
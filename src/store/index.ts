import { createStore } from 'vuex';
import { themeStoreModule, ThemeStoreState } from './modules/theme';
import { LocalStorageStroePlugin } from './plugins';

export interface RootState {
  appName: string;
  theme: ThemeStoreState;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: 'Mecci',
  } as RootState,

  modules:{
    theme: themeStoreModule,
  },
  
  // 插件
  plugins:[LocalStorageStroePlugin],
});

/**
 * 默认导出
 */
export default store;
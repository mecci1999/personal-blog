/**
 * 项目所有的接口api方法
 */
import { apiHttpClient } from '../utils/apiHttpClient';

export const getUserInfo = async () => {
  return await apiHttpClient.get('user');
}
/**
 * 项目所有的接口api方法
 */
import { apiHttpClient, tenApiHttpRequest } from '../utils/apiHttpClient';

/**
 * 获取博主信息接口
 * @returns
 */
export const getUserInfo = async () => {
  return await apiHttpClient.get('user');
};

/**
 * 获取用户的QQ头像以及昵称，使用的他人的api接口，注意是否会挂掉的问题,该接口已经挂掉
 */
export const getQQUserInfo = async (id: string) => {
  try {
    const response = await tenApiHttpRequest.get(`qqname/?qq=${id}`);

    // 失败
    if (response) {
      return response;
    } else {
      // 失败直接输出头像地址
      return {
        data: {
          imgurl: `https://thirdqq.qlogo.cn/g?b=sdk&nk=${id}&s=140`,
        },
      };
    }
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _error = error as any;

    throw _error.response;
  }
};

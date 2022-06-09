import { Request, Response, NextFunction } from 'express';
import { getUserInfo } from './user.service';

/**
 * 获得博主信息
 */
export const userInfo = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 获得信息
  try {
    const data = await getUserInfo();

    // 做出响应
    response.send(data);
  } catch (error) {
    next(error);
  }
}
import { Request, Response, NextFunction } from 'express';

/**
 * 验证内容状态
 */
export const validatePostStatus = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { status: statusFromQuery = '' } = request.query;
  const { status: statusFromBody = '' } = request.body;

  const status = statusFromQuery || statusFromBody;

  const isValidStatus = ['published', 'draft', 'archived', ''].includes(
    `${status}`,
  );

  if (!isValidStatus) {
    next(new Error('BAD_REQUEST'));
  } else {
    next();
  }
};
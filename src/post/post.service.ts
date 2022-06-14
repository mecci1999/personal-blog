import { connection } from "../app/database/mysql";
import { PostModel } from "./post.model";

/**
 * 创建博客
 */
export const createPost = async (post: PostModel) => {
  //准备查询
  const statement = `
    INSERT INTO post
    SET ?
  `;

  //执行查询
  const [...data] = await connection.promise().query(statement, post);

  //提供数据
  return data[0];
}
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

/**
 * 获取博客列表
 */
export const getPostList = async () => {
  // 解构数据

  //准备查询
  const statement = `
    SELECT
      post.id,
      post.title,
      post.description,
      post.content,
      post.status,
      post.wordAmount,
      post.readTime,
      post.type,
      JSON_OBJECT(
        'id',user.id,
        'name',user.name
      ) AS user
    FROM
      post
    LEFT JOIN user
    ON user.id = post.userId
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement);

  // 提供数据
  return data;
}

/**
 * 单个博客的内容
 */
export const getOnlyOnePost = async (postId: number) => {
  // 准备查询
  const statement = `
    SELECT
      post.id,
      post.title,
      post.description,
      post.content,
      post.status,
      post.wordAmount,
      post.readTime,
      post.type,
      JSON_OBJECT(
        'id',user.id,
        'name',user.name
      ) AS user
    FROM
      post
    LEFT JOIN user
      ON user.id = post.userId
    WHERE
      post.id = ?
  `;

  // 执行查询
  const [...data] = await connection.promise().query(statement, postId);

  // 提供数据
  return data[0];
} 
import { connection } from "../app/database/mysql";

/**
 * 搜索标签
 */
export interface searchPostsOptions {
  postTitle?: string;
}

export const searchPosts = async (options: searchPostsOptions) => {
  // 解构选项
  const { postTitle: name } = options;

  // SQL 参数
  const params: Array<any> = [`%${name}%`];

  // 准备查询
  const statement = `
    SELECT
      post.id as postId,
      post.title
    FROM
        post
    WHERE
        post.title LIKE ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, params);

  // 提供数据
  return data as any;
};

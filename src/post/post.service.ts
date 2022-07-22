import { connection } from "../app/database/mysql";
import { PostBgImgModel, PostModel } from "./post.model";

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
};

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
      ) AS user,
      post.created,
      post.updated
    FROM
      post
    LEFT JOIN user
    ON user.id = post.userId
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement);

  // 提供数据
  return data;
};

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
      ) AS user,
      post.created,
      post.updated,
      postbgimage.filename AS filename,
      CAST(
        IF(
          COUNT(tag.id),
          CONCAT(
            '[',
              GROUP_CONCAT(
                DISTINCT JSON_OBJECT(
                  'id',tag.id,
                  'name',tag.name
                )
              ),
            ']'
          ),
          NULL
        ) AS JSON
      ) AS tags
    FROM
      post
    LEFT JOIN user
      ON user.id = post.userId
    LEFT JOIN postbgimage
      ON post.id = postbgimage.postId
    LEFT JOIN post_tag
      ON post.id = post_tag.postId
    LEFT JOIN
      tag ON post_tag.tagId = tag.id
    WHERE
      post.id = ?
  `;

  // 执行查询
  const [...data] = await connection.promise().query(statement, postId);

  // 提供数据
  return data[0];
};

/**
 * 上传博客封面方法
 */
export const createPostBgImg = async (image: PostBgImgModel) => {
  // 准备查询
  const statement = `
    INSERT INTO postbgimage
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, image);

  // 提供数据
  return data;
};

/**
 * 根据 postId 获取封面
 */
export const findBgImgByPostId = async (postId: number) => {
  // 准备查询
  const statement = `
    SELECT *
    FROM postbgimage
    WHERE postId = ?
    ORDER BY postbgimage.id DESC
    LIMIT 1
  `;

  // 执行查询
  const [...data] = await connection.promise().query(statement, postId);

  // 返回数据
  return data[0][0];
};

/**
 * 检查内容标签
 */
export const postHasTag = async (postId: number, tagId?: number) => {
  // 准备查询
  const statement = `
    SELECT * FROM post_tag
    WHERE postId=? AND tagId=?
  `;

  // 执行查询
  const [...data] = await connection
    .promise()
    .query(statement, [postId, tagId]);

  // 提供数据
  return data[0][0] ? true : false;
};

/**
 * 保存内容标签
 */
export const creatPostTag = async (postId: number, tagId?: number) => {
  // 准备查询
  const statement = `
    INSERT INTO post_tag (postId, tagId)
    VALUES(?, ?)
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, [postId, tagId]);

  // 提供数据
  return data;
};

/**
 * 删除内容标签
 */
export const deletePostTag = async (postId: number, tagId?: number) => {
  //准备查询
  const statement = `
    DELETE FROM post_tag
    WHERE postId=? AND tagId=?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, [postId, tagId]);

  // 提供数据
  return data;
};

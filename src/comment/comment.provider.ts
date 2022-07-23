/**
 * 查询片断
 */
export const sqlFragment = {
  leftJoinPost: `
    LEFT JOIN post
    ON post.id = comment.postId
  `,
  post: `
    JSON_OBJECT(
      'id', post.id,
      'title', post.title
    ) AS post
  `,
  repliedComment: `
    (
      SELECT
        JSON_OBJECT(
          'id', repliedComment.id,
          'content', repliedComment.content,
          'name', repliedComment.name,
          'eMail', repliedComment.eMail,
          'avatarImgUrl', repliedComment.avatarImgUrl,
          'os',repliedComment.os,
          'browser',repliedComment.browser,
          'address',repliedComment.address,
          'status', repliedComment.status,
          'created', repliedComment.created,
          'updated', repliedComment.updated
        )
      FROM
        comment repliedComment
      WHERE comment.parentId = repliedComment.id
      ) AS repliedComment
  `,
  totalReplies: `
    (
      SELECT
        COUNT(reply.id)
      FROM
        comment reply
      WHERE
        reply.parentId = comment.id
    ) AS totalReplies
  `,
};

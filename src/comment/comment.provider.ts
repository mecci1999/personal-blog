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
          'userId', repliedCommentUser.id,
          'name', repliedCommentUser.name,
          'avatar', IF(COUNT(repliedCommentUserAvatar.id), 1, NULL)
        )
      FROM
        comment repliedComment
      LEFT JOIN user AS repliedCommentUser
        ON repliedCommentUser.id = repliedComment.userId
      LEFT JOIN avatar AS repliedCommentUserAvatar
        ON repliedCommentUser.id = repliedCommentUserAvatar.userId
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

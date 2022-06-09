import { connection } from "../app/database/mysql";
import { UserModel } from "./user.model";

/**
 * 获取博主相关信息
 */
export const getUserInfo = async () => {
  // 准备查询
  const statement = `
    SELECT
      name,
      introduction,
      info
    FROM
      user
  `;

  // 执行查询
  const [...data] = await connection.promise().query(statement);

  // 提供数据
  return data[0][0];
}
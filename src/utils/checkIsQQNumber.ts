/**
 * 检查是否为qq号
 * @param id qq号
 */
export const checkIsQQNumber = (id: string): boolean => {
  if (!id) return false;

  // qq号的正则匹配规则
  const qqReg = /^[1-9][0-9]{4,10}$/;

  const reg = new RegExp(qqReg);

  // 判断是否为QQ号
  if (!reg.test(id)) return false;

  return true;
};

/**
 * 检查是否为qq邮箱
 * @param url qq邮箱
 */
export const checkIsQQEmail = (url: string): boolean => {
  if (!url) return false;

  // qq号的正则匹配规则
  const qqEmailReg = /^[1-9][0-9]{4,10}@qq.com$/;

  const reg = new RegExp(qqEmailReg);

  // 判断是否为QQ号
  if (!reg.test(url)) return false;

  return true;
};

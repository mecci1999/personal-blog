/**
 * 设置本地存储
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setStroage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 获得本地存储
 */
export const getStroage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};
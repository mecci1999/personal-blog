/**
 * 获取当前时间
 */
export const getCurrnetTime = (): string => {
  // 获取当前时间
  const date = new Date();

  // 当前小时
  const hour = date.getHours();
  const currentHour = hour < 10 ? '0' + hour : `${hour}`;

  // 当前分钟
  const minute = date.getMinutes();
  const currentMinute = minute < 10 ? '0' + minute : `${minute}`;

  // 当前秒
  const second = date.getSeconds();
  const currentSecond = second < 10 ? '0' + second : `${second}`;

  return currentHour + ':' + currentMinute + ':' + currentSecond;
};

/**
 * 随着时间更换壁纸方法
 */
export const changeBackgroundImageByTime = (date: string): string => {
  // 返回URL
  const hour = parseInt(date, 10);
  let style;
  if (4 <= hour && hour < 6) {
    style = `url('../src/assets/image/4-6.jpeg')`;
  } else if (6 <= hour && hour < 8) {
    style = `url('../src/assets/image/6-8.jpeg')`;
  } else if (8 <= hour && hour < 16) {
    style = `url('../src/assets/image/8-16.jpeg')`;
  } else if (16 <= hour && hour < 18) {
    style = `url('../src/assets/image/16-18.jpeg')`;
  } else if (18 <= hour && hour < 20) {
    style = `url('../src/assets/image/18-20.jpeg')`;
  } else if (20 <= hour && hour < 24) {
    style = `url('../src/assets/image/20-24.jpeg')`;
  } else if (0 <= hour && hour < 4) {
    style = `url('../src/assets/image/24-4.jpeg')`;
  } else {
    style = `url('../src/assets/image/8-16.jpeg')`;
  }

  return style;
};

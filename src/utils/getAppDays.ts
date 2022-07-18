/**
 * 
 * @param day 当前时间
 */
export const getAppDays = (day: string) => {
    const createdTime  = Date.parse('2021-07-11') ;

    const nowTime = Date.parse(day);

    if(nowTime - createdTime < 0) return 0;
    
    if(nowTime - createdTime === 0) return 1;

    const days = (nowTime - createdTime) / (1 * 24 * 60 * 60 * 1000);

    return days;
}

/**
 * 获取当前日期
 */
export const getCurrentDays = () => {
    const date = new Date();       
    const mon = date.getMonth() + 1;       
    const day = date.getDate();
    const currDate = date.getFullYear() + "-"+ (mon<10?"0"+mon:mon) + "-"+(day<10?"0"+day:day);

    return currDate;
}
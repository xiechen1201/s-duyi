/**
 * 格式化时间戳
 * @param {*} timestamp
 * @returns
 */
type DatePart = "year" | "time" | "year-time" | "time-week";

export function formatDate(timestamp: number, part?: DatePart): string | undefined {
  if (!timestamp) {
    return;
  }
  const date = new Date(timestamp);

  const year = date.getFullYear(); // 年
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月
  const day = String(date.getDate()).padStart(2, "0"); // 日

  const hour = String(date.getHours()).padStart(2, "0"); // 时
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 分
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 秒

  const weekArr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  const week = weekArr[date.getDay()];

  let str = "";

  switch (part) {
    case "year": {
      str = `${year}-${month}-${day}`;
      break;
    }
    case "time": {
      str = `${hour}:${minutes}:${seconds} `;
      break;
    }
    case "year-time": {
      str = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
      break;
    }
    case "time-week": {
      str = `${hour}:${minutes}:${seconds} ${week}`;
      break;
    }
    default: {
      str = `${year}-${month}-${day} ${hour}:${minutes}:${seconds} ${week}`;
    }
  }

  return str;
}

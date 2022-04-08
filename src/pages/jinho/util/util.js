export function getDay() {
  const today = new Date();
  const day = today.getDay();
  const weekDays = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return weekDays[day];
}

export function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  return `${year}년 ${month + 1}월 ${date}일`;
}

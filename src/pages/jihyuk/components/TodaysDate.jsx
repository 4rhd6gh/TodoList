// 오늘 날짜 표기하는 컴포넌트
import React from "react";
import styled from "styled-components";

const DateContainer = styled.div``;

const DatePart = styled.p`
  font-size: 35px;
  font-weight: bold;
  word-spacing: -4px;
`;

const DayPart = styled.p`
  margin-top: 10px;
  color: rgb(134, 142, 150);
  font-size: 20px;
`;

const TodaysDate = () => {
  // console.log("TodaysDate 렌더링 됨");
  // 날짜 구하는 로직 분리할 수도 있지 않을까?
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
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
  return (
    <DateContainer>
      <DatePart>
        {year}년 {month + 1}월 {date}일
      </DatePart>

      <DayPart>{weekDays[day]}</DayPart>
    </DateContainer>
  );
};

export default TodaysDate;

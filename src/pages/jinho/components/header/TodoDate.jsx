import React from "react";
import * as util from "../../util/util.js";
import styled from "styled-components";

const DateComponent = styled.p`
  font-size: 35px;
  font-weight: bold;
  word-spacing: -4px;
`;

const DayComponent = styled.p`
  margin-top: 10px;
  color: rgb(134, 142, 150);
  font-size: 20px;
`;

const TodoDate = () => {
  return (
    <div>
      <DateComponent>{util.getToday()}</DateComponent>
      <DayComponent>{util.getDay()}</DayComponent>
    </div>
  );
};

export default TodoDate;

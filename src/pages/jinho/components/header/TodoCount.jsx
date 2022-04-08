import React from "react";

const TodoCount = React.memo(function (props) {
  return <p>할 일 {props.count}개 남음</p>;
});

export default TodoCount;

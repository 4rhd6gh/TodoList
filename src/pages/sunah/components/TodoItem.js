import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, edit, toggle } from "../modules/todos";
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    /*hover시에만 보이도록*/
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Input = styled.input`
  width: 360px;
  font-size: 21px;
  color: #495057;
  border: none;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useDispatch();
  const onRemove = (id) => dispatch(remove(id));
  const onEdit = (id, text) => dispatch(edit(id, text));
  const onToggle = (id) => dispatch(toggle(id));

  const [value, setValue] = useState(text);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(id, text);
  };
  return (
    <div>
      <TodoItemBlock>
        <CheckCircle done={done} onClick={() => onToggle(id)}>
          {done && <MdDone />}
        </CheckCircle>
        <form onSubmit={onSubmit}>
          <Input done={done} value={value} onChange={onChange}></Input>
        </form>
        <Remove onClick={() => onRemove(id)}>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    </div>
  );
};

export default React.memo(TodoItem);

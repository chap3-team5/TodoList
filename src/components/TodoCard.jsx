import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __deleteTodosThunk } from '../redux/modules/todolistSlice';

const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const DeleteHandler = () => {
    dispatch(__deleteTodosThunk(todo.id));
  };

  return (
    <StTodocard
      onClick={() => {
        navigate(`/DetailTodo/${todo.id}`);
      }}
    >
      <StContent>
        <div>{todo.title}</div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // stopPropagation 이벤트 버블링 막아주는
            const result = window.confirm('이 할일을 지울까요?');
            if (result) {
              return DeleteHandler();
            }
          }}
        >
          삭제
        </button>
      </StContent>
      <div>작성자: {todo.username}</div>
    </StTodocard>
  );
};

export default TodoCard;

const StTodocard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
`;

const StContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

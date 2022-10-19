import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __deleteTodosThunk } from '../redux/modules/todolistSlice';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const DeleteHandler = () => {
    dispatch(__deleteTodosThunk(todo.id));
  };

  return (
    <div
      className="border border-solid  border-slate-200 w-full h-20 mb-3 mt-2 rounded-lg drop-shadow-md  hover:bg-slate-200 cursor-pointer"
      onClick={() => {
        navigate(`/DetailTodo/${todo.id}`);
      }}
    >
      <div className="flex justify-between ml-2 mt-3 font-medium text-lg">
        <div>{todo.title}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            const result = window.confirm('이 할일을 지울까요?');
            if (result) {
              return DeleteHandler();
            }
          }}
        >
          <div className="mr-4">
            <RiDeleteBin5Fill size="20" />
          </div>
        </button>
      </div>

      <div className="ml-2">작성자: {todo.username}</div>
    </div>
  );
};

export default TodoCard;

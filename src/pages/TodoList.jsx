import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import TodoCard from '../components/TodoCard';
import { __getTodosThunk } from '../redux/modules/todolistSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) return <div>🚫에러가 발생했습니다!!🚫</div>;

  return (
    <div>
      <Header />
      <div className="flex flex-col mt-6 ml-4 mr-4">
        <h2>📌 내 할일</h2>
        {todos.length === 0 ? (
          <div>✏️ 할 일을 추가해주세요</div>
        ) : (
          <div>
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;

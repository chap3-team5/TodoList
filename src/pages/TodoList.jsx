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
    return <div>λ‘λ©μ€...</div>;
  }
  if (error) return <div>π«μλ¬κ° λ°μνμ΅λλ€!!π«</div>;

  return (
    <div>
      <Header />
      <div className="flex flex-col mt-6 ml-4 mr-4">
        <h2>π λ΄ ν μΌ</h2>
        {todos.length === 0 ? (
          <div>βοΈ ν  μΌμ μΆκ°ν΄μ£ΌμΈμ</div>
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

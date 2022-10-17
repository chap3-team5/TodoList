import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';
import detailTodo from '../modules/detailTodoSlice';
import addTodos from '../modules/addtodoSlice';

const store = configureStore({
  reducer: { detailTodo: detailTodo, todos: todos, addTodos: addTodos },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';
import detailTodo from '../modules/detailTodoSlice';

const store = configureStore({
  reducer: { detailTodo: detailTodo, todos: todos },
});


export default store;

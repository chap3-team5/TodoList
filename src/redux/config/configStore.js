import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';
import detailTodo from '../modules/detailTodoSlice';
import addTodos from '../modules/addtodoSlice';
import comments from '../modules/commentsSlice';

const store = configureStore({
  reducer: {
    detailTodo: detailTodo,
    todos: todos,
    addTodos: addTodos,
    comments: comments,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

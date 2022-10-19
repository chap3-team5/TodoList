//logger
import logger from 'redux-logger';
// slices
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
});

export default store;

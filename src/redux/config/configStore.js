import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';
import detailTodo from '../modules/detailTodoSlice';
import addTodos from '../modules/addtodoSlice';
import addComment from '../modules/addCommentSlice';

const store = configureStore({
  reducer: {
    detailTodo: detailTodo,
    todos: todos,
    addTodos: addTodos,
    addComment: addComment,
  },
});

export default store;

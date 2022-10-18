import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';
import detailTodo from '../modules/detailTodoSlice';
import addTodos from '../modules/addtodoSlice';
import addComment from '../modules/addCommentSlice';
import comments from '../modules/commentsSlice';

const store = configureStore({
  reducer: {
    detailTodo: detailTodo,
    todos: todos,
    addTodos: addTodos,
    addComment: addComment,
    comments: comments,
  },
});

export default store;

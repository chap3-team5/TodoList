import { configureStore } from '@reduxjs/toolkit';

import detailTodo from '../modules/detailTodoSlice';

const store = configureStore({
  reducer: { detailTodo: detailTodo },
});

export default store;

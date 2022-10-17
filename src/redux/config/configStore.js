import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todolistSlice';

const store = configureStore({
  reducer: { todos: todos },
});
export default store;

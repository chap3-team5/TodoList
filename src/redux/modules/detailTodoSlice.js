import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  todo: [],
};

//get thunk
export const __getTodo = createAsyncThunk(
  'getTodo/투두한개가져오기',
  async (payload, thunkAPI) => {
    try {
      const todo = await axios.get(`http://localhost:3001/todos?id=${payload}`);
      return thunkAPI.fulfillWithValue(...todo.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//update thunk
export const __updateTodo = createAsyncThunk(
  'updateTodo/투두 수정하기',
  async (payload, thunkAPI) => {
    try {
      const todo = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(todo.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const detailTodoSlice = createSlice({
  name: '이거뭔데언제쓰지',
  initialState,
  reducers: {},
  extraReducers: {
    //getTodo
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //updateTodo
    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = detailTodoSlice.actions;
export default detailTodoSlice.reducer;

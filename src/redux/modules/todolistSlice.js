import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoApi } from '../../mytools/instance';

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  inSuccess: false,
};

export const __getTodosThunk = createAsyncThunk(
  'GET_TODOS',
  async (_, thunkAPI) => {
    // 두가지 매개변수를 받아와야 됌, get은 _써서 빈자리 채워주기
    try {
      // 요청 성공/실패에 따라 실행되어야 되는 부분 try...catch 구문으로 나눠주기
      const { data } = await TodoApi.getTodos; // 구조분해할당
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deleteTodosThunk = createAsyncThunk(
  'DELETE_TODO',
  async (arg, thunkAPI) => {
    try {
      TodoApi.deleteTodos(payload);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    // reducers에서 바로 구현되지 않는 기타 reducer로직 구현 , 통신 진행중 실패 성공에 대한 케이스
    [__getTodosThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodosThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodosThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodosThunk.fulfilled]: (state, action) => {
      const delete_data = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(delete_data, 1);
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

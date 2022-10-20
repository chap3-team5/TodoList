import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoApi } from '../../mytools/instance';

//initialState
const initialState = {
  todos: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

//Thunk 함수
export const __addBtn = createAsyncThunk(
  'addBtn',
  async (payload, thunkAPI) => {
    try {
      const { data } = await TodoApi.postTodos(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      //error도 하나의 객체.
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//reducer
const addtodoSlice = createSlice({
  name: 'addTodos',
  initialState,
  reducers: {
    addBtn: (state, action) => {
      return { todo: [...state.todos, action.payload] };
    },
    completeTodo: (state, action) => {
      state.isSuccess = false;
    },
  },

  extraReducers: {
    //pending - 대기
    [__addBtn.pending]: (state) => {
      //promise가 fullfilled일때 dispatch.
      //네트워크 요청이 시작되면 로딩상태를 true로 변경.
      state.isLoading = true;
    },
    //
    [__addBtn.fulfilled]: (state, action) => {
      //네트워크 요청이 끝났으니, false로 변경.
      state.isLoading = false;
      //Store에 있는 addtodo서버에서 가져온 todo를 넣어.
      state.todos.push(action.payload);
    },

    [__addBtn.rejected]: (state, action) => {
      //에러가 발생했지만, 네트워크 요청이 끝났으니,
      //false로 변경
      state.isLoading = false;
      //catch 된 error 객체를 state.error에 넣어.
      state.error = action.payload;
    },
  },
});

export const { addBtn, completeTodo } = addtodoSlice.actions;
export default addtodoSlice.reducer;

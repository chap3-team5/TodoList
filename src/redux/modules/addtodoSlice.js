//src/redux/modules/addtodoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//initialState
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
//Thunk 함수
export const __addBtn = createAsyncThunk(
  'addBtn',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(`http://localhost:3001/todos`, payload);
      console.log(data);
      //   return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      //error도 하나의 객체.
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//reducer
const addtodoSlice = createSlice({
  name: 'addTodos ',
  initialState,
  reducers: {
    addBtn: (state, action) => {
      return { todo: [...state.todos, action.payload] };
    },
    // dfsd
  },
  extraReducers: {
    //pending - 대기
    [__addBtn.pending]: (state) => {
      //   console.log('fulfilled상태', state, action);
      //promise가 fullfilled일때 dispatch.
      //네트워크 요청이 시작되면 로딩상태를 true로 변경.
      state.isLoading = true;
    },
    //
    [__addBtn.fulfilled]: (state, action) => {
      //네트워크 요청이 끝났으니, false로 변경.
      state.isLoading = false;
      //Store에 있는 addtodo서버에서 가져온 todo를 넣어.
      state.todos = action.payload;
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

export const { addBtn } = addtodoSlice.actions;
export default addtodoSlice.reducer;
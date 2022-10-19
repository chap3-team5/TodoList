//src/modules/commentSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getComments = createAsyncThunk(
  'getComments', // 전체 댓글 조회
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

//initialState
const initialState = {
  data: {
    content: '',
    nickname: '',
    id: 0,
    todoId: 0,
  },
  isLoading: false,
  error: null,
  editToggle: false,
};

//reducer
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    emptyComment: (state) => {
      state.data.content = '';
    },
    editToggle: (state, action) => {
      state.editToggle = action.payload;
    },
  },
  extraReducers: {
    [__getComments.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

//export
export const { editToggle, emptyComment } = commentSlice.actions;
export default commentSlice.reducer;

//src/modules/commentSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getComment = createAsyncThunk(
  '코멘트 한 개 가져오기',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments/${payload}`
      );
      thunkAPI.fulfillWithValue(data);
    } catch (e) {
      thunkAPI.rejectWithValue(e);
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
      console.log(state);
      state.data.content = '';
    },
    editToggle: (state, action) => {
      state.editToggle = action.payload;
    },
  },
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

//export

export const { emptyComment } = commentSlice.actions;

export default commentSlice.reducer;

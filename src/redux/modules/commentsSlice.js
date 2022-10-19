//src/redux/modules/commentsSlice.js
//ActionCreator
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getComments = createAsyncThunk(
  'getComments',
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

export const __getTodoId = createAsyncThunk(
  'getComment',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments?todoId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __delComment = createAsyncThunk(
  'delComment',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/comments?todoId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __modifyComment = createAsyncThunk(
  'modifyComment',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3001/comments/${payload}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//initialState
const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};
//reducer
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducer: {},
  extraReducers: {
    //댓글 전부 가져와서 조회할거야.
    [__getTodoId.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getTodoId.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getTodoId.rejected]: (state, action) => {
      state.comments.isLoading = true;
      state.comments.error = action.payload;
    },
    // comment삭제
    [__delComment.pending]: (state) => {
      state.commentsTodoId.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.commentsTodoId.isLoading = false;
      const target = state.commentsTodoId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsTodoId.data.splice(target, 1);
    },
    [__delComment.rejected]: (state, action) => {
      state.commentsTodoId.isLoading = false;
      state.commentsTodoId.error = action.payload;
    },
    //modify comment
    [__modifyComment.pending]: (state) => {},
    [__modifyComment.fulfilled]: (state, action) => {
      const target = state.commentsTodoId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentsTodoId.data.splice(target, 1, action.payload);
    },
    [__modifyComment.rejected]: () => {},
  },
});
//export reducer
export const { editToggle, emptyComment } = commentsSlice.actions;
export default commentsSlice.reducer;

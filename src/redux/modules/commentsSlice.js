import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getComments = createAsyncThunk(
  'getComments',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`process.env.COMMENT${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __getTodoId = createAsyncThunk(
  'getTodoId',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments/?todoId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __addComment = createAsyncThunk(
  'addComment',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://localhost:3001/comments`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __delComment = createAsyncThunk(
  'delComment', // 댓글 삭제
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
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
        `http://localhost:3001/comments/${payload.id}`,
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
  },
  isLoading: false,
  error: null,
  editToggle: false,
};

//reducer
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    editingToggle: (state, action) => {
      state.editToggle = action.payload;
    },
  },

  extraReducers: {
    //comment 전체 조회
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
      state.comments.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.comments.data = state.comments.data.filter((item) => {
        return item.id !== action.payload;
      });
      state.comments.isLoading = false;
    },
    [__delComment.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
    // comment 수정
    [__modifyComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newComments = state.comments.data.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        } else {
          return comment;
        }
      });

      state.comments.data = newComments;
      state.isLoading = false;
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // comment 추가
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.data.push(action.payload);
    },

    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//export reducer
export const { editingToggle } = commentsSlice.actions;
export default commentsSlice.reducer;

//src/redux/modules/commentsSlice.js
//ActionCreator
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getTodoId = createAsyncThunk(
  'getComment', // 댓글 조회 todoId
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
  'addComment/코멘트추가하기',
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
      const { data } = await axios.delete(
        `http://localhost:3001/comments/${payload}`
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
        `http://localhost:3001/comments/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      // return thunkAPI.rejectWithValue(err);
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
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    editToggle: (state, action) => {
      state.editToggle = action.payload;
    },
    emptyComment: (state, _) => {
      //state.commentsTodoId.data.content = '';
    },
  },

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
      state.comments.data.splice(target, 1);
    },
    [__delComment.rejected]: (state, action) => {
      state.commentsTodoId.isLoading = false;
      state.commentsTodoId.error = action.payload;
    },
    //modify comment
    [__modifyComment.pending]: (state) => {},
    [__modifyComment.fulfilled]: (state, action) => {
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
    [__modifyComment.rejected]: () => {},

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
export const {} = commentsSlice.actions;
export default commentsSlice.reducer;

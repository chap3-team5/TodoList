import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  comments: [
    {
      id: 0,
      username: 'kang',
      body: 'its body',
    },
  ],
};

export const __addComment = createAsyncThunk(
  'addComment/코멘트추가하기',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://localhost:3001/comments`, payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//reducer
const addCommentSlice = createSlice({
  name: 'addComments~ ',
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },

    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },

    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment } = addCommentSlice.actions;
export default addCommentSlice.reducer;

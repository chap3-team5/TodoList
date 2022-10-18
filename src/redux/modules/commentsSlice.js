//src/redux/modules/commentsSlice.js
//ActionCreator
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getTodoId = createAsyncThunk(
  'getTodoId',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`localhost:3001/comments?todoId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
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
});
//export reducer
export default commentsSlice.reducer;

//src/modules/commentSlice.js
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

//initialState
const initialState = {
  data: {
    comment: '',
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
  reducer: {
    emptyComment: (state) => {
      state.data.content = '';
    },
    editToggle: (state, action) => {
      state.editToggle = action.payload;
    },
  },
});

//export

export const { emptyComment } = commentSlice.actions;
export default commentSlice.reducer;

//src/modules/commentSlice.js

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

const commentSlice = creactSlice({
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

// export { } = commentSlice.action;
export default commentSlice.reducer;

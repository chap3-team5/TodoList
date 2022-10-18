//src/modules/commentSlice.js

//initialState
const initialState = {
  comment: [],
};
//reducer

const commentSlice = creactSlice({
  name: 'inputComment',
  initialState,
  reducer: {},
});

//export

// export { } = commentSlice.action;
export default commentSlice.reducer;

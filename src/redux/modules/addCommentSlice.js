// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   isLoading: false,
//   error: null,
//   comments: [
//     {
//       todoId: 0,
//       id: 0,
//       username: 'kang',
//       body: 'its body',
//     },
//   ],
// };

// //reducer
// const addCommentSlice = createSlice({
//   name: 'addComments~ ',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__addComment.pending]: (state) => {
//       state.isLoading = true;
//     },

//     [__addComment.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.comments = action.payload;
//     },

//     [__addComment.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { addComment } = addCommentSlice.actions;
// export default addCommentSlice.reducer;

import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export const TodoApi = {
  getComments: () => instance.get('/comments'),
  getCommentsId: (payload) => instance.get(`/comments/${payload}`),
  getCommentsTodoId: (payload) => instance.get(`/comments/?todoId=${payload}`),
  postComments: (payload) => instance.post('/comments', payload),
  deleteComments: (payload) => instance.delete(`/comments/${payload}`),
  patchComments: (payload) => instance.patch(`/comments/${payload.id}`),

  getTodos: () => instance.get('/todos'),
  getTodo: (payload) => instance.get(`/todos?id=${payload}`),
  postTodos: (payload) => instance.post('/todos', payload),
  deleteTodos: (payload) => instance.delete(`/todos/${payload}`),
  patchTodos: (payload) => instance.patch(`/todos/${payload.id}`),
};

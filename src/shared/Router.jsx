import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';
import AddTodo from '../pages/AddTodo';
import DetailTodo from '../pages/DetailTodo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/AddTodo" element={<AddTodo />} />
        {/* <Route path="/DetailTodo" element={<DetailTodo />} /> */}
        <Route path="/DetailTodo/:id" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

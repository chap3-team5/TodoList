import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HomeBox from '../components/HomeBox';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="grid place-items-center pt-6 flex-col space-y-10">
        <HomeBox title="Add To Do" onClick={() => navigate('/AddTodo')} />
        <HomeBox title="Todo List" onClick={() => navigate('/TodoList')} />
      </div>
    </div>
  );
};

export default Home;

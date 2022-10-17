import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeBox from '../components/HomeBox';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <StHome>
        <h2>무엇을 할까요?</h2>
        <StContent>
          <HomeBox
            title="📝 할일 기록하기"
            onClick={() => navigate('/AddTodo')}
          />
          <HomeBox title="📙 Todo List" onClick={() => navigate('/TodoList')} />
        </StContent>
      </StHome>
    </div>
  );
};

export default Home;

const StHome = styled.div`
  display: flex;
  margin: 20px 0 0 15px;
`;

const StContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  text-align: center;
  font-size: 24px;
`;

import React from 'react';
import styled from 'styled-components';

const HomeBox = ({ title, onClick }) => {
  return <StHomeBox onClick={onClick}>{title}</StHomeBox>;
};

export default HomeBox;

const StHomeBox = styled.div`
  border: 3px solid tomato;
  border-radius: 10px;
  width: 350px;
  height: 200px;
  margin: 30px 100px auto auto;
  line-height: 200px;
  cursor: grab;
`;

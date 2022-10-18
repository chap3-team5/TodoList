import React, { useState } from 'react';
import styled from 'styled-components';
import AddComments from './AddComment';

const Comments = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <StContainer isShow={isShow}>
      <StToggleContainer
        onClick={() => {
          setIsShow((show) => !show);
        }}
      >
        <StText>{isShow ? '🔍 댓글내리기' : '🔍 댓글보기'}</StText>
      </StToggleContainer>
      <AddComments />
    </StContainer>
  );
};

export default Comments;

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? '400px' : '50px')};
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StText = styled.div`
  margin: 20px 0 20px 0;
  font-size: 14px;
`;

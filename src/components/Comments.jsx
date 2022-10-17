import React, { useState } from 'react';
import styled from 'styled-components';

const Comments = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <StContainer isShow={isShow}>
      {isShow ? '눌러서 댓글내리기' : '눌러서 댓글보기'}
    </StContainer>
  );
};

export default Comments;

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? '400px' : '50px')};
  width: 100%;
  bottom: 0px;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //충돌부분
import styled from 'styled-components';
import { __getTodoId } from '../redux/modules/commentsSlice';
import AddComments from './AddComment';
import Comment from './Comment';
//충돌부분

const Comments = () => {
  // 충돌부분--------------------------------
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.comments.comments);

  //여기까지충돌부분 ------------------------------------
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(__getTodoId(id));
  }, [dispatch, id, isShow]);

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
      {/* 충돌부분 */}
      <div>
        {data.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      {/* 충돌부분 */}
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

// const CommentList = styled.div`
//   height: 350px;
// `;

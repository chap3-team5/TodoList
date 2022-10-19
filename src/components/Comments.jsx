import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getTodoId } from '../redux/modules/commentsSlice';
import AddComments from './AddComment';
import Comment from './Comment';

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.comments.comments);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(__getTodoId(id));
  }, [dispatch, id]);

  return (
    <div>
      <div
        onClick={() => {
          setIsShow((show) => !show);
        }}
      >
        <div>{isShow ? '🔍 댓글내리기' : '🔍 댓글보기'}</div>
      </div>
      <AddComments />

      <div className={`${isShow ? 'hidden' : 'block'}`}>
        {data.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

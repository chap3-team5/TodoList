import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __addComment } from '../redux/modules/commentsSlice';

const AddComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    nickname: '',
    body: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.nickname.trim() === '' || comment.body.trim() === '') return;
    dispatch(__addComment({ todoId: +id, ...comment }));
    setComment({ nickname: '', body: '' });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="nickname"
          value={comment.nickname}
          onChange={onChangeHandler}
          placeholder="이름 (5자 이내)"
        ></input>
        <input
          type="text"
          name="body"
          value={comment.body}
          onChange={onChangeHandler}
          placeholder="댓글을 추가하세요. (100자 이내)"
        ></input>
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default AddComments;

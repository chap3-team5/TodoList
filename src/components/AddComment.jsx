import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { __addComment } from '../redux/modules/commentsSlice';
import CommonButton from './CommonButton';

const AddComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comment, onChangeHandler, reset] = useInput({
    nickname: '',
    body: '',
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.nickname.trim() === '' || comment.body.trim() === '') return;
    dispatch(__addComment({ todoId: +id, ...comment }));
    reset();
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
          maxLength={5}
        ></input>
        <input
          type="text"
          name="body"
          value={comment.body}
          onChange={onChangeHandler}
          placeholder="댓글을 추가하세요. (100자 이내)"
          maxLength={100}
        ></input>
        <CommonButton css="bg-red-500">추가하기</CommonButton>
      </form>
    </div>
  );
};

export default AddComments;

import React, { useState } from 'react';

const AddComments = () => {
  const [comment, setComment] = useState({
    title: '',
    body: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.title.trim() === '' || comment.body.trim() === '') return;
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          value={comment.title}
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

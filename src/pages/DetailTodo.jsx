import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CommonButton from '../components/CommonButton';
import { Link, useParams } from 'react-router-dom';
import { __getTodo, __updateTodo } from '../redux/modules/detailTodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../components/Comments';
import AddComments from '../components/AddComment';

const DetailTodo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [todoContent, setTodoContent] = useState('');

  //투두 한 개 갖고오기
  const todo = useSelector((state) => state.detailTodo.todo);
  console.log(todo);
  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch, id]);

  //투두 수정 눌렀을 때 textarea에 todo값 불러오기
  useEffect(() => {
    setTodoContent(todo.body);
  }, [todo]);

  //투두 저장 눌렀을 때 변경된 내용 저장하기
  const onClickEditHandler = () => {
    dispatch(__updateTodo({ ...todo, body: todoContent }));
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <Header />
      <div>
        <div>id:{todo.id}</div>
        <div>
          <Link to="/">이전으로</Link>{' '}
        </div>
      </div>
      <div>{todo.title}</div>
      {isEdit ? (
        <textarea
          value={todoContent}
          name="todoContent"
          onChange={(e) => setTodoContent(e.target.value)}
        ></textarea>
      ) : (
        <div>{todo.body}</div>
      )}
      {isEdit ? (
        <CommonButton onClick={onClickEditHandler}>{'저장'}</CommonButton>
      ) : (
        <CommonButton onClick={() => setIsEdit(!isEdit)}>{'수정'}</CommonButton>
      )}
      {!isEdit && <Comments />}

      <AddComments />
    </div>
  );
};

export default DetailTodo;

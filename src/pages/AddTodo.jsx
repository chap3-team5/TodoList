import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, __addBtn } from '../redux/modules/addtodoSlice';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSuccess = useSelector((state) => state.todos.isSuccess);

  // // const { isLoading, error, todos } = useSelector((state) => state);
  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    if (isSuccess) {
      return navigate('/TodoList');
    }
    return () => dispatch(completeTodo());
  }, [dispatch, isSuccess, navigate]);

  const [todo, setTodo] = useState({
    username: '',
    title: '',
    body: '',
  });

  const onChangeValue = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setTodo({ ...todo, [name]: value });
  };

  const onAddBtn = () => {
    if (
      todo.username.trim() === '' ||
      todo.title.trim() === '' ||
      todo.body.trim() === ''
    ) {
      return alert('모든 항목을 입력해주세유');
    }
    dispatch(__addBtn(todo));
    setTodo({ username: '', title: '', body: '' });
    navigate('/TodoList');
  };

  return (
    <div>
      <Header />
      <form onSubmit={onAddBtn}>
        <div>
          <label>작성자</label>
          <input
            name="username"
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            maxLength="5"
            value={todo.username}
            onChange={onChangeValue}
            required
          />
          <label>제목</label>
          <input
            name="title"
            placeholder="제목을 입력해주세요.(50자 이내)"
            maxLength="50"
            value={todo.title}
            onChange={onChangeValue}
            required
          />
          <label>내용</label>
          <textarea
            name="body"
            placeholder="내용을 입력해주세요.(200자 이내)"
            maxLength="200"
            value={todo.body}
            onChange={onChangeValue}
            required
          />
          <div className="btnBox">
            <button>추가하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

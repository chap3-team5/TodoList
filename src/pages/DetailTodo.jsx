import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CommonButton from '../components/CommonButton';
import { Link, useParams } from 'react-router-dom';
import { __getTodo, __updateTodo } from '../redux/modules/detailTodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../components/Comments';

const DetailTodo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [todoContent, setTodoContent] = useState('');

  //투두 한 개 갖고오기
  const todo = useSelector((state) => state.detailTodo.todo);
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
    <div className="min-w-screen-md h-screen">
      <Header />
      <div className="mt-7">
        {isEdit ? (
          <></>
        ) : (
          <div className="flex justify-between mx-auto bg-gray-200 rounded-xl shadow border p-3 ">
            <div className=" text-center font-bold "> 아이디 : {todo.id}</div>
            <div className="text-emerald-500 text-center hover:text-emerald-800 transition-all duration-300 ease-out">
              <Link to="/TodoList">뒤로가기</Link>
            </div>
          </div>
        )}

        <div className=" mx-auto mt-3 bg-gray-200 rounded-xl shadow border p-3 ">
          제목 : {todo.title}
        </div>
        {isEdit ? (
          <textarea
            value={todoContent}
            name="todoContent"
            onChange={(e) => setTodoContent(e.target.value)}
            className=" h-96 w-screen mt-3 bg-blue-50 rounded-xl shadow border p-3  "
          ></textarea>
        ) : (
          <div className=" h-96 mx-auto mt-3 bg-gray-200 rounded-xl shadow border p-3 ">
            {todo.body}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-3 bottom-0 w-full">
        {isEdit ? (
          <button
            onClick={onClickEditHandler}
            className=" bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          >
            {'저장'}
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            {'수정'}
          </button>
        )}
      </div>
      {!isEdit && <Comments />}
    </div>
  );
};

export default DetailTodo;

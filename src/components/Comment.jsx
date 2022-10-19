//src/components/comment.jsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  __delComment,
  __modifyComment,
  __getTodoId,
} from '../redux/modules/commentsSlice';

import { __getComment, emptyComment } from '../redux/modules/commentSlice';

const Comment = ({ comment }) => {
  // console.log(comment);
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [modifyComment, setModifyComment] = useState('');
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { editingToggle } = useSelector((state) => state.comments);
=======

  const { editState } = useSelector((state) => state.comments);
>>>>>>> origin/dev

  //   const { content } = useSelector((state) => state.comment);

  //   const [value, setValue] = useState('');
  //   const onChangeValue = (e) => {
  //     const { value } = e.target;
  //     setValue(value);
  //   };

  useEffect(() => {
    setModifyComment(comment.body);
  }, [comment]);

  //저장하기
  const onSaveBtn = () => {
    dispatch(
      __modifyComment({
        ...comment,
        body: modifyComment,
      })
    );
    setIsEdit(false);
    dispatch(editToggle(false));
  };

  //수정하기
  const onEditBtn = () => {
    setIsEdit(true);
<<<<<<< HEAD
    // dispatch(__getComment(comment.id));
    dispatch(editToggle(true));
=======

    dispatch(__getComment(comment.id));

    // dispatch(editToggle(true));
>>>>>>> origin/dev
  };

  //삭제하기
  const onDeleteBtn = () => {
    const delBtn = window.confirm('삭제하시겠어요?');

    if (delBtn) {
      dispatch(__delComment(comment.id));
      //클릭시 console 값 들어와.
      // console.log(comment.id);
    } else {
      return;
    }
  };

  const onCancleBtn = () => {
    setIsEdit(false);
    dispatch(emptyComment());
    dispatch(editToggle(false));
  };
  return (
    <div className="commentwrap">
      {/* 수정버튼 클릭 전 */}
      {!isEdit ? (
        <div class="w-full flex flex-row m-2 rounded-md text-sm bg-gray-50 font-medium text-gray-500 ">
          <div className="w-4/5 h-16 pt-5 text-center rounded">
            <div className="float-left ml-2 mr-2 rounded-md border border-gray-300 text-xl">
              {comment.nickname}
            </div>
            <div className=" text-xl text-left">{comment.body}</div>
          </div>

<<<<<<< HEAD
          <div>
            <button onClick={onEditBtn} disabled={editingToggle}>
              수정
            </button>
            <button onClick={onDeleteBtn} disabled={editingToggle}>
=======
          <div className="absolute right-10 float-right flex gap-2 mr-5 justify-center rounded-md bg-white mt-2 p-1 py-1 text-base font-large text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <button
              onClick={onEditBtn}
              className="w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-0 sm:w-auto sm:text-sm"
            >
              수정
            </button>
            <button
              onClick={onDeleteBtn}
              className="w-full justify-center rounded-md border border-transparent bg-red-600 px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
>>>>>>> origin/dev
              삭제
            </button>
          </div>
        </div>
      ) : (
        /* 수정버튼 클릭 후 */
        <div class="w-full flex flex-row m-2 rounded-md text-sm bg-gray-50 font-medium text-gray-500 ">
          <div className="w-3/5 h-16 pt-5 text-center rounded">
            <input
              className="float-left ml-2 mr-2 rounded-md border border-gray-300 text-xl"
              type="text"
              name="modifyComment"
              value={modifyComment}
              onChange={(e) => {
                setModifyComment(e.target.value);
              }}
            />
          </div>

          <div className="absolute right-10 float-right flex gap-2 mr-5 justify-center rounded-md bg-white mt-2 p-1 py-1 text-base font-large text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <button
              onClick={onCancleBtn}
              className="w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-0 sm:w-auto sm:text-sm"
            >
              취소
            </button>
            <button
              onClick={onSaveBtn}
              className="w-full justify-center rounded-md border border-transparent bg-red-600 px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              저장
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;

const BorderWrap = styled.div`
  width: 400px;
`;

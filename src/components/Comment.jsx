//src/components/comment.jsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  editToggle,
  __delComment,
  __getTodoId,
  __modifyComment,
} from '../redux/modules/commentsSlice';
import { __getComment, emptyComment } from '../redux/modules/commentSlice';

const Comment = ({ comment }) => {
  // console.log(comment);

  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [modifyComment, setModifyComment] = useState('');
  const dispatch = useDispatch();
  const { editState } = useSelector((state) => state.comments);

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
    // dispatch(editToggle(false));
  };

  //수정하기
  const onEditBtn = () => {
    setIsEdit(true);
    dispatch(__getComment(comment.id));
    // dispatch(editToggle(true));
  };

  //삭제하기
  const onDeleteBtn = () => {
    const delBtn = window.confirm('삭제하시겠어요?');
    if (delBtn) {
      dispatch(__delComment(comment.id));
    } else {
      return;
    }
  };

  const onCancleBtn = () => {
    setIsEdit(false);
    dispatch(emptyComment());

    //dispatch(editToggle(false));

    // dispatch(editToggle(false));
  };

  useEffect(() => {
    setModifyComment(comment.body);
  }, [comment.body]);

  return (
    <div className="commentwrap">
      {/* 수정버튼 클릭 전 */}
      {!isEdit ? (
        <div className="borderWrap">
          <div className="inputcomment">
            <div>{comment.nickname}</div>
            <div>{comment.body}</div>
          </div>

          <div>
            <button onClick={onEditBtn} disabled={editState}>
              수정
            </button>
            <button onClick={onDeleteBtn} disabled={editState}>
              삭제
            </button>
          </div>
        </div>
      ) : (
        /* 수정버튼 클릭 후 */
        <BorderWrap>
          <div className="inputcomment">
            <input
              type="text"
              name="modifyComment"
              value={modifyComment}
              onChange={(e) => {
                setModifyComment(e.target.value);
              }}
            />
          </div>

          <div>
            <button onClick={onCancleBtn}>취소</button>
            <button onClick={onSaveBtn}>저장</button>
          </div>
        </BorderWrap>
      )}
    </div>
  );
};

export default Comment;

const BorderWrap = styled.div`
  width: 400px;
`;

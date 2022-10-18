//src/components/comment.jsx
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Comment = ({ comment }) => {
  //   const [comment, setComment] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="commentwrap">
      {/* 수정버튼 클릭 전 */}
      {isEdit ? (
        <div className="borderWrap">
          <div className="inputcomment">
            <div>작성자</div>
            <div>댓글</div>
          </div>

          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      ) : (
        /* 수정버튼 클릭 후 */
        <div className="borderWrap">
          <div className="inputcomment">
            <input type="text" />
          </div>

          <div>
            <button>취소</button>
            <button>저장</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;

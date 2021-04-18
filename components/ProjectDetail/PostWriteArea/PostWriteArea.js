import React from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_POST } from '../../../reducers/modal';
import { PostWrite, PostWriteTab, WriteTab, PostWriteBottom } from './styles';

const PostWriteArea = () => {
  const dispatch = useDispatch();
  const onClick = () => (
    dispatch({
      type: CREATE_POST,
      data: true,
    })
  );
  return (
    <PostWrite onClick={onClick}>
      <PostWriteTab>
        <WriteTab>글</WriteTab>
        <WriteTab>업무</WriteTab>
        <WriteTab>일정</WriteTab>
        <WriteTab>할일</WriteTab>
      </PostWriteTab>
      <PostWriteBottom>
        <p>글을 입력해주세요</p>
      </PostWriteBottom>
    </PostWrite>
  );
};

export { PostWriteArea };

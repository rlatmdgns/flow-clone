import React from 'react';
import { PostWrite, PostWriteTab, WriteTab, PostWriteBottom } from './styles';

const PostWriteArea = () => (
  <PostWrite>
    <PostWriteTab>
      <WriteTab>글</WriteTab>
      <WriteTab>업무</WriteTab>
      {/* <WriteTab>일정</WriteTab>
      <WriteTab>할일</WriteTab> */}
    </PostWriteTab>
    <PostWriteBottom>
      <p>글을 입력해주세요</p>
    </PostWriteBottom>
  </PostWrite>
);

export { PostWriteArea };

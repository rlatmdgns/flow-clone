import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CREATE_POST } from '../../../reducers/modal';
import CreatePostForm from '../../modals/CreatePostForm';
import Modal from '../../modals/Modal';
import { PostWrite, PostWriteTab, WriteTab, PostWriteBottom } from './styles';

const PostWriteArea = () => {
  const dispatch = useDispatch();
  const { editMode } = useSelector((state) => state.user);
  const { createPost } = useSelector((state) => state.modal);
  const onClick = () => (
    dispatch({
      type: CREATE_POST,
      data: true,
    })
  );
  const popupCloseHandle = () => {
    dispatch({
      type: CREATE_POST,
      data: false,
    });
  };
  return (
    <>
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
      <Modal visible={createPost} popupCloseHandle={popupCloseHandle} dimd>
        <CreatePostForm editMode={editMode} />
      </Modal>
    </>
  );
};

export { PostWriteArea };

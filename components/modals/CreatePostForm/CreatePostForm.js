import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  PopupWrap,
  Header,
  PopupTitle,
  CloseButton,
  Content,
  CreatePostNav,
  CreateItem,
  CreateTab,
  Footer,
  CreateButton,
} from './styles';
import { CREATE_POST } from '../../../reducers/modal';
import CreateTask from '../../CreateTask';
import { CREATE_TASK_REQUEST } from '../../../reducers/project';
import { EDIT_MODE } from '../../../reducers/user';
import EditTask from '../../EditTask';

const CreatePostForm = ({ editMode }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [submitType, setSubmitType] = useState(CREATE_TASK_REQUEST);

  const tabHandler = useCallback((i) => {
    const TYPE = {
      0: CREATE_TASK_REQUEST,
    };
    setActiveTab(i);
    setSubmitType(TYPE.i);
  }, []);
  const popupCloseHandle = useCallback(() => {
    dispatch({
      type: CREATE_POST,
      data: false,
    });
  }, []);
  const editCloseHandle = useCallback(() => {
    dispatch({
      type: EDIT_MODE,
      data: false,
    });
  }, []);
  const CreateTitle = [
    // '글',
    '업무',
  ];
  const CreateTabContent = {
    0: <CreateTask submitType={submitType} />,
    // 1: 1,
  };
  return editMode.state ? (
    <PopupWrap>
      <Header>
        <PopupTitle>게시물 수정</PopupTitle>
        <CloseButton onClick={editCloseHandle}>X</CloseButton>
      </Header>
      <Content>
        <EditTask editMode={editMode} editCloseHandle={editCloseHandle} />
      </Content>
    </PopupWrap>
  ) : (
    <PopupWrap>
      <Header>
        <PopupTitle>게시물 작성</PopupTitle>
        <CloseButton onClick={popupCloseHandle}>X</CloseButton>
      </Header>
      <CreatePostNav>
        {CreateTitle.map((v, i) => (
          <CreateItem key={i} onClick={() => tabHandler(i)}>
            <CreateTab type="button" role="tab" active={activeTab === i}>
              {v}
            </CreateTab>
          </CreateItem>
        ))}
      </CreatePostNav>
      <Content>{CreateTabContent[activeTab]}</Content>
    </PopupWrap>
  );
};

CreatePostForm.propTypes = {};

export { CreatePostForm };

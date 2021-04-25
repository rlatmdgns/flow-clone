import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [submitType, setSubmitType] = useState(CREATE_TASK_REQUEST);
  const CreateTitle = [
    // '글',
    '업무',
  ];
  const CreateTabContent = {
    0: <CreateTask />,
    // 1: 1,
  };
  const tabHandler = (i) => {
    const TYPE = {
      0: CREATE_TASK_REQUEST,
    };
    setActiveTab(i);
    setSubmitType(TYPE.i);
  };
  const popupCloseHandle = () => {
    dispatch({
      type: CREATE_POST,
      data: false,
    });
  };

  const submitHandler = () => {
    dispatch({
      type: submitType,
      data: { title: 'test', taskStatus: 'REQUEST', userId: 'rlatmdgns94', projectId: 1, priority: 'NORMAL', progress: 0 },
    });
  };
  return (
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
      <Content>
        {CreateTabContent[activeTab]}
      </Content>
      <Footer>
        <CreateButton type="button" onClick={submitHandler}>올리기</CreateButton>
      </Footer>
    </PopupWrap>
  );
};

CreatePostForm.propTypes = {

};

export { CreatePostForm };

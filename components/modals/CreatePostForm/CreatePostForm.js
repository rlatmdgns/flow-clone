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
import Task from './Task/Task';

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const CreateTitle = [
    // '글',
    '업무',
  ];
  // const CreateTabContent = {
  //   0: <Task />,
  //   // 1: 1,
  // };
  // const tabHandler = (i) => {
  //   setActiveTab(i);
  // };
  const popupCloseHandle = () => {
    dispatch({
      type: CREATE_POST,
      data: false,
    });
  };
  return (
    <PopupWrap>
      <Header>
        <PopupTitle>게시물 작성</PopupTitle>
        <CloseButton onClick={popupCloseHandle}>X</CloseButton>
      </Header>
      <CreatePostNav>
        {/* {CreateTitle.map((v, i) => (
          <CreateItem key={i} onClick={() => tabHandler(i)}>
            <CreateTab type="button" role="tab" active={activeTab === i}>
              {v}
            </CreateTab>
          </CreateItem>
        ))} */}
      </CreatePostNav>
      <Content>
        {/* {CreateTabContent[activeTab]} */}
      </Content>
      <Footer>
        <CreateButton type="button">올리기</CreateButton>
      </Footer>
    </PopupWrap>
  );
};

CreatePostForm.propTypes = {

};

export { CreatePostForm };

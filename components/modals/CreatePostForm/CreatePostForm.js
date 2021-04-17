import React from 'react';
import PropTypes from 'prop-types';
import {
  PopupWrap,
  Header,
  PopupTitle,
  CloseButton,
  Content,
} from './styles';

const CreatePostForm = () => (
  <PopupWrap>
    <Header>
      <PopupTitle>sss</PopupTitle>
      <CloseButton>X</CloseButton>
    </Header>
    <Content>11</Content>
  </PopupWrap>
);

CreatePostForm.propTypes = {

};

export { CreatePostForm };

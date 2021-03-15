import React from 'react';
import PropTypes from 'prop-types';
import {Form ,Blind,Fieldset, LoginTitle,LoginInputBox, LoginInput,LoginMessage, LoginButton} from './styles';
const LoginFrom = () => {
  return (
    <Form>
      <Fieldset>
        <Blind>로그인폼</Blind>
        <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow"/>
        <LoginTitle>로그인</LoginTitle>
        <LoginInputBox>
          <LoginInput type="text" title="아이디 입력"/>
        </LoginInputBox>
        <LoginInputBox>
          <LoginInput type="password" title="비밀번호 입력"/>
        </LoginInputBox>
        <LoginMessage>ssssss</LoginMessage>
        <LoginButton type="button">로그인</LoginButton>
      </Fieldset>
    </Form>
  );
};


// LoginFrom.propTypes = {

// };


export {LoginFrom};

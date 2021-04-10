import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Form, Blind, Fieldset, LoginTitle, LoginInputBox, LoginInput, LoginMessage, LoginButton } from './styles';
import { LOGIN_REQUEST } from '../../reducers/user';

const LoginFrom = () => {
  const dispatch = useDispatch();
  const { loginDone, loginError, loginLoading } = useSelector((state) => state.user);
  useEffect(() => {
    if (loginDone) {
      Router.push('/main');
    }
  }, [loginDone]);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setId(e.target.value);
  };

  const test = () => {
    const idRegex = /^[0-9a-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!idRegex.test(id)) {
      setId('');
      return;
    }
    if (!passwordRegex.test(password)) {
      setPassword('');
      return;
    }
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        username: id,
        password,
      },
    });
  };

  return (
    <Form>
      <Fieldset>
        <Blind>로그인폼</Blind>
        <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow" />
        <LoginTitle>로그인</LoginTitle>
        <LoginInputBox>
          <LoginInput type="text" title="아이디 입력" onChange={emailHandler} />
        </LoginInputBox>
        <LoginInputBox>
          <LoginInput type="password" title="비밀번호 입력" onChange={passwordHandler} />
        </LoginInputBox>
        <LoginMessage>ssssss</LoginMessage>
        <LoginButton type="button" onClick={test}>로그인</LoginButton>
      </Fieldset>
    </Form>
  );
};

// LoginFrom.propTypes = {

// };

export { LoginFrom };

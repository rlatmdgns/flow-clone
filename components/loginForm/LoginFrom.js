import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
    } else if (loginError) {
      alert(loginError);
    }
  }, [loginDone, loginError]);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const passwordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, [password]);
  const emailHandler = useCallback((e) => {
    setId(e.target.value);
  }, [id]);

  const onSubmitForm = useCallback(() => {
    const idRegex = /^[0-9a-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!idRegex.test(id)) {
      console.log(id);
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
  }, [id, password]);

  return (
    <Form>
      <Fieldset>
        <Blind>로그인폼</Blind>
        <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow" />
        <LoginTitle>로그인</LoginTitle>
        <LoginInputBox>
          <LoginInput type="text" title="아이디 입력" onChange={emailHandler} required />
        </LoginInputBox>
        <LoginInputBox>
          <LoginInput type="password" title="비밀번호 입력" onChange={passwordHandler} required />
        </LoginInputBox>
        <LoginMessage>ssssss</LoginMessage>
        <LoginButton type="button" onClick={onSubmitForm}>로그인</LoginButton>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Fieldset>
    </Form>
  );
};

// LoginFrom.propTypes = {

// };

export { LoginFrom };

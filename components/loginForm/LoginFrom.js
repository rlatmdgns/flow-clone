import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Form, Blind, Fieldset, LoginTitle, LoginInputBox, LoginInput, LoginMessage, LoginButton, SignUpLink } from './styles';
import { LOGIN_REQUEST } from '../../reducers/user';

const LoginFrom = () => {
  const [error, setError] = useState('');
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
  }, []);
  const emailHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    const idRegex = /^[0-9a-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!idRegex.test(id)) {
      setId('');
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
    if (!passwordRegex.test(password)) {
      setPassword('');
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        username: id,
        password,
      },
    });
  }, [);

  return (
    <Form>
      <Fieldset>
        <Blind>로그인폼</Blind>
        <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow" />
        <LoginTitle>로그인</LoginTitle>
        <LoginInputBox>
          <LoginInput type="text" title="아이디 입력" onChange={emailHandler} value={id} required />
        </LoginInputBox>
        <LoginInputBox>
          <LoginInput type="password" title="비밀번호 입력" onChange={passwordHandler} value={password} required />
        </LoginInputBox>
        <LoginMessage>{error}</LoginMessage>
        <LoginButton type="button" onClick={onSubmitForm}>로그인</LoginButton>
        <SignUpLink>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </SignUpLink>
      </Fieldset>
    </Form>
  );
};

// LoginFrom.propTypes = {

// };

export { LoginFrom };

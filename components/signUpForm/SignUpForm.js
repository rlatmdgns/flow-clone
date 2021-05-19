import React, { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpContent, Form, SignUpTitle, FormTitle, SignUpText, Label, Blind, InputBox, Input, Termcheck, SignUpButton } from './styles';
import { SIGN_UP_REQUEST } from '../../reducers/user';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { signUpDone, signUpError } = useSelector((state) => state.user);

  useEffect(() => {
    if (signUpDone) {
      Router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const idHandler = (e) => {
    setId(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordCheckHandler = (e) => {
    setPasswordCheck(e.target.value);
  };
  const termHandler = (e) => {
    setTerm(e.target.checked);
  };

  const onSubmit = useCallback(() => {
    const nameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    const idRegex = /^[0-9a-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!nameRegex.test(name)) {
      alert('이름을 입력해주세요.');
      setName('');
      return;
    }
    if (!idRegex.test(id)) {
      alert('아이디를 입력해주세요.');
      setId('');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert('비밀번호를 입력해주세요.');
      setPassword('');
      return;
    }
    if (password !== passwordCheck) {
      alert('비밀번호가 동일하지 않습니다.');
      setPasswordCheck('');
      return;
    }
    if (term === false) {
      alert('서비스 이용약관, 개인정보취급방침에 동의하세요.');
      return;
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { id, password, name },
    });
  }, [name, id, password, term]);

  return (
    <SignUpContent>
      <SignUpTitle>플로우 비즈니스 계정을 생성하세요</SignUpTitle>
      <SignUpText>
        <em>비지니스 베이직 버전을 30일간 무료로 체험해 볼 수 있습니다.</em>
        <br />
        카드 등록 없이 시작할 수 있으며, 요금이 부과되지 않습니다.
      </SignUpText>
      <Form>
        <fieldset>
          <Blind>가입정보 입력 폼</Blind>
          <FormTitle>가입정보 입력</FormTitle>
          <InputBox>
            <Label htmlFor="">이름</Label>
            <Input type="text" placeholder="이름" onChange={nameHandler} value={name} />
          </InputBox>
          <InputBox>
            <Label htmlFor="">아이디</Label>
            <Input type="email" placeholder="example" onChange={idHandler} value={id} />
          </InputBox>
          <InputBox>
            <Label htmlFor="">비밀번호</Label>
            <Input type="password" placeholder="비밀번호" onChange={passwordHandler} value={password} />
          </InputBox>
          <InputBox>
            <Label htmlFor="">비밀번호 확인</Label>
            <Input type="password" placeholder="비밀번호 재입력" onChange={passwordCheckHandler} value={passwordCheck} />
          </InputBox>
          <Termcheck htmlFor="">
            <input type="checkbox" name="" id="" onChange={termHandler} />
            <em>서비스 이용약관, 개인정보취급방침</em>을 확인하였고, 이에 동의합니다.
          </Termcheck>
          <SignUpButton type="button" onClick={onSubmit}>확인</SignUpButton>
        </fieldset>
      </Form>
    </SignUpContent>
  );
};

// SignUpForm.propTypes = {

// };

export { SignUpForm };

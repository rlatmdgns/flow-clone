import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Form ,Blind,Fieldset, LoginTitle,LoginInputBox, LoginInput,LoginMessage, LoginButton} from './styles';
import { useDispatch } from 'react-redux';
import { LOGIN_REQUEST } from '../../reducers/user';

const LoginFrom = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const test = () => {
    dispatch({
      type : LOGIN_REQUEST,
      data : {
        username : email,
        password: password
      }
    })
  }

  return (
    <Form>
      <Fieldset>
        <Blind>로그인폼</Blind>
        <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow"/>
        <LoginTitle>로그인</LoginTitle>
        <LoginInputBox>
          <LoginInput type="text" title="아이디 입력" onChange={emailHandler}/>
        </LoginInputBox>
        <LoginInputBox>
          <LoginInput type="password" title="비밀번호 입력" onChange={passwordHandler}/>
        </LoginInputBox>
        <LoginMessage>ssssss</LoginMessage>
        <LoginButton type="button"onClick={test }>로그인</LoginButton>
      </Fieldset>
    </Form>
  );
};


// LoginFrom.propTypes = {

// };


export {LoginFrom};

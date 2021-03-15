import React from "react";
import SignUpForm from '../components/signUpForm';
import styled from 'styled-components';
const SignUpWrap = styled.div`
text-align:center;
`
const SignUp = () => {
  return (
    <SignUpWrap>
      <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow" />
      <SignUpForm/>
    </SignUpWrap>
  );
};

export default SignUp;

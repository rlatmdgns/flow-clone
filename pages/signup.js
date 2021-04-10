import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/signUpForm';

const SignUpWrap = styled.div`
text-align:center;
`;
const SignUp = () => (
  <SignUpWrap>
    <img src="/images/flowLogo.png" width="140px" height="41px" alt="flow" />
    <SignUpForm />
  </SignUpWrap>
);

export default SignUp;

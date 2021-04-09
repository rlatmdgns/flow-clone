import React from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import LoginFrom from '../components/loginForm';
import wrapper from '../store/confiureStore';

const Login = () => (
  <LoginFrom />
);
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  console.log(context.req.headers.cookie);
  console.log(context.req);
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Login;

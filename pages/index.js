import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from '@redux-saga/core';
import axios from 'axios';
import cookies from 'next-cookies';
import LoginFrom from '../components/loginForm';
import { MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/confiureStore';

const Home = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <LoginFrom />
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { token } = cookies(context);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  context.store.dispatch({
    type: MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;

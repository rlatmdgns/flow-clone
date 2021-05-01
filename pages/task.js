import React from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import wrapper from '../store/confiureStore';
import AppLayout from '../components/layout/AppLayout';

const Task = () => (
  <AppLayout>
    <div>1111111</div>
  </AppLayout>
);
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Task;

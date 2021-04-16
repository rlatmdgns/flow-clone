import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from '@redux-saga/core';
import AppLayout from '../../components/layout/AppLayout';
import ProjectDetail from '../../components/ProjectDetail';
import wrapper from '../../store/confiureStore';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <ProjectDetail />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
export default Detail;

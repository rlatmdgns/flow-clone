import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from '@redux-saga/core';
import cookies from 'next-cookies';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/layout/AppLayout';
import ProjectDetail from '../../components/ProjectDetail';
import wrapper from '../../store/confiureStore';
import { LOAD_POSTS_REQUEST, PROJECT_INFO_REQUEST } from '../../reducers/project';
import { MY_INFO_REQUEST } from '../../reducers/user';

const posts = () => {
  const { projectPosts, loadPostsLoading } = useSelector((state) => state.project);
  return (
    <AppLayout>
      <ProjectDetail projectPosts={projectPosts} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { token, userId } = cookies(context);
  const { id } = context.params;

  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  context.store.dispatch({
    type: MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: PROJECT_INFO_REQUEST,
    data: id,
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
    data: { userId, size: 10, page: 0 },
    projectId: id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
export default posts;

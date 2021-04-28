import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from '@redux-saga/core';
import cookies from 'next-cookies';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/layout/AppLayout';
import ProjectDetail from '../../components/ProjectDetail';
import wrapper from '../../store/confiureStore';
import { LOAD_POSTS_REQUEST } from '../../reducers/project';

const posts = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { projectPosts, loadPostsLoading } = useSelector((state) => state.project);
  const { id } = router.query;
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //     data: { userId: 'rlatmdgns94', size: 10, page: 0 },
  //     projectId: id,
  //   });
  // }, [projectPosts]);

  return (
    <AppLayout>
      <ProjectDetail projectPosts={projectPosts} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { token } = cookies(context);
  const { id } = context.params;
  console.log(id, 'ididididdidiidiididididdidiidi');
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
    data: { userId: 'rlatmdgns94', size: 10, page: 0 },
    projectId: id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
export default posts;

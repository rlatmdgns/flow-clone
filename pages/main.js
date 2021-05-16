import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import cookies from 'next-cookies';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import wrapper from '../store/confiureStore';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/modals/Modal';
import { ProjectMakeForm } from '../components/modals/ProjectMakeForm/ProjectMakeForm';
import { ProjectGroup } from '../components/ProjectGroup/ProjectGroup';
import { LOAD_FAVORITE_PROJECTS_REQUEST, LOAD_PROJECTS_REQUEST } from '../reducers/project';
import { MY_INFO_REQUEST } from '../reducers/user';

const Main = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(2);
  const { me } = useSelector((state) => state.user);
  const { projects, favoriteProjects, loadProjectsLoading, hasNext } = useSelector((state) => state.project);
  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     alert('재 로그인 해주세요.');
  //     Router.push('/');
  //   }
  // }, [me && me.id]);
  useEffect(() => {
    function onScroll() {
      let count = pageNum;
      if (pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasNext && !loadProjectsLoading) {
          dispatch({
            type: LOAD_PROJECTS_REQUEST,
            data: { userId: me.id, size: 5, page: pageNum },
          });
          count += 1;
          setPageNum(count);
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [projects, loadProjectsLoading, pageNum]);

  return (
    <AppLayout>
      <ProjectGroup projects={projects} favoriteProjects={favoriteProjects} />
      <Modal>
        <ProjectMakeForm />
      </Modal>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { token, userId } = cookies(context);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  context.store.dispatch({
    type: MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_FAVORITE_PROJECTS_REQUEST,
    data: { userId },
  });
  context.store.dispatch({
    type: LOAD_PROJECTS_REQUEST,
    data: { userId, size: 10, page: 0 },
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Main;

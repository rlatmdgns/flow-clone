import React, { useEffect } from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import cookies from 'next-cookies';
import { useSelector, useDispatch } from 'react-redux';
import wrapper from '../store/confiureStore';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/modals/Modal';
import { ProjectMakeForm } from '../components/modals/ProjectMakeForm/ProjectMakeForm';
import { ProjectGroup } from '../components/ProjectGroup/ProjectGroup';
import { LOAD_PROJECTS_REQUEST } from '../reducers/project';

const Main = () => {
  const dispatch = useDispatch();
  const { projects, loadProjectsLoading } = useSelector((state) => state.project);
  console.log('projects', projects);
  useEffect(() => {
    function onScroll() {
      if (pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        let pageNum = 1;
        if (!loadProjectsLoading) {
          dispatch({
            type: LOAD_PROJECTS_REQUEST,
            data: { userId: 'rlatmdgns94', size: 4, page: pageNum },
          });
          pageNum += 1;
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [projects, loadProjectsLoading]);
  return (
    <AppLayout>
      <ProjectGroup projects={projects} />
      <Modal>
        <ProjectMakeForm />
      </Modal>
    </AppLayout>
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
    type: LOAD_PROJECTS_REQUEST,
    data: { userId: 'rlatmdgns94', size: 10, page: 0 },
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Main;

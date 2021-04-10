import React, { useEffect } from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import cookies from 'next-cookies';
import wrapper from '../store/confiureStore';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/modals/Modal';
import { ProjectMakeForm } from '../components/modals/ProjectMakeForm/ProjectMakeForm';
import { ProjectGroup } from '../components/ProjectGroup/ProjectGroup';

const Main = () => (
  <AppLayout>
    <ProjectGroup />
    <Modal>
      <ProjectMakeForm />
    </Modal>
  </AppLayout>
);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { token } = cookies(context);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Main;

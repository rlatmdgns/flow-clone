import React from 'react';
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

// export const getServerSideProps = wrapper.getServerSideProps((context) => {

// })

export default Main;

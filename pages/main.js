import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { ProjectGroup } from '../components/ProjectGroup/ProjectGroup';
import wrapper from '../store/confiureStore';
const Main = () => {
  return (
      <AppLayout>
        <ProjectGroup/>
      </AppLayout>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps((context) => {

// })

export default Main;

import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { ProjectGroup } from '../components/ProjectGroup/ProjectGroup';
import { ProjectMakeForm } from '../components/ProjectMakeForm/ProjectMakeForm';
const Main = () => {
  return (
      <AppLayout>
        <ProjectGroup/>
        {/* <ProjectMakeForm/> */}
      </AppLayout>
  );
};

export default Main;

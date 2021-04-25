import React from 'react';
import { TitleInput, TaskContentText } from './styles';
import { CreateTaskList } from '../CreateTaskList/CreateTaskList';

const CreateTask = () => {
  const stateHandler = () => {
    console.log('Asdasas');
  };
  return (
    <div>
      <TitleInput itype="text" title="제목을 입력하세요." placeholder="제목을 입력하세요" />
      <CreateTaskList />
      <TaskContentText contentEditable="true" placeholder="업무내용을 입력하세요" />
    </div>
  );
};

CreateTask.propTypes = {

};

export { CreateTask };

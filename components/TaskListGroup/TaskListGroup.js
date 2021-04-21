import React from 'react';
import PropTypes from 'prop-types';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';

const TaskListGroup = () => {
  const stateHandler = () => {
    console.log('zzzzzzz');
  };
  return (
    <>
      <TaskList>
        <TaskItemTitle>업무상태</TaskItemTitle>
        <TaskListCell>
          <TaskStateGroup stateHandler={stateHandler} />
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>담당자</TaskItemTitle>
        <TaskListCell>
          <button type="button">담당자 추가</button>
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>시작일시</TaskItemTitle>
        <TaskListCell>
          <span>
            <span>2021-04-16 (금), 01:29</span>
          </span>
        </TaskListCell>
        <TaskItemTitle>마감일시</TaskItemTitle>
        <TaskListCell>
          <span>
            <span>2021-04-16 (금), 01:29</span>
          </span>
        </TaskListCell>
      </TaskList>
    </>
  );
};

TaskListGroup.propTypes = {

};

export { TaskListGroup };

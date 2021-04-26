import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';

const TaskListGroup = ({ managers, startDate, endDate, taskStatus }) => {
  // const [taskStartDate, setTaskStartDate] = useState(null || moment(startDate).format('YYYY-MM-DD HH:mm'));
  // const [taskEndDate, setTaskEndDate] = useState(null || moment(endDate).format('YYYY-MM-DD HH:mm'));

  const stateHandler = () => {
    console.log('zzzzzzz');
  };
  return (
    <>
      <TaskList>
        <TaskItemTitle>업무상태</TaskItemTitle>
        <TaskListCell>
          <TaskStateGroup taskStatus={taskStatus} stateHandler={stateHandler} />
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>담당자</TaskItemTitle>
        <TaskListCell>
          {managers.map((manager, i) => (
            <span key={i}>{manager}</span>
          ))}
          <button type="button">담당자 추가</button>
        </TaskListCell>
      </TaskList>
      <TaskList>
        {startDate && (
          <>
            <TaskItemTitle>시작일시</TaskItemTitle>
            <TaskListCell>
              <span>
                <span>{startDate}</span>
              </span>
            </TaskListCell>
          </>
        )}
        {endDate && (
          <>
            <TaskItemTitle>마감일시</TaskItemTitle>
            <TaskListCell>
              <span>
                <span>{endDate}</span>
              </span>
            </TaskListCell>
          </>
        )}

      </TaskList>
    </>
  );
};

TaskListGroup.propTypes = {};

export { TaskListGroup };

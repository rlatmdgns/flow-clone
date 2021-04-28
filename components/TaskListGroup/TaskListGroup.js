import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';
import { STATE_CHANGE_REQUEST } from '../../reducers/project';
import Progress from '../Progress';

const TaskListGroup = ({ postId, managers, startDate, endDate, taskStatus, progress }) => {
  const dispatch = useDispatch();
  // const [taskStartDate, setTaskStartDate] = useState(null || moment(startDate).format('YYYY-MM-DD HH:mm'));
  // const [taskEndDate, setTaskEndDate] = useState(null || moment(endDate).format('YYYY-MM-DD HH:mm'));

  const stateHandler = (status) => {
    dispatch({
      type: STATE_CHANGE_REQUEST,
      data: { postId, status },
    });
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
      <TaskList>
        <TaskItemTitle>진척도</TaskItemTitle>
        <TaskListCell>
          <Progress progress={progress} />
        </TaskListCell>
      </TaskList>
    </>
  );
};

TaskListGroup.propTypes = {};

export { TaskListGroup };

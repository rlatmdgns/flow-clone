import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';
import { PROGRESS_CHANGE_REQUEST, STATE_CHANGE_REQUEST } from '../../reducers/project';
import Progress from '../Progress';

const TaskListGroup = ({ postId, managers, startDate, endDate, taskStatus, progress }) => {
  const dispatch = useDispatch();
  const stateHandler = (status) => {
    dispatch({
      type: STATE_CHANGE_REQUEST,
      data: { postId, status },
    });
  };
  const progressHandler = (progress) => {
    dispatch({
      type: PROGRESS_CHANGE_REQUEST,
      data: { postId, progress },
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
            <span>{manager.name}</span>
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
                <span>{moment(startDate).format('YYYY-MM-DD HH:mm')}</span>
              </span>
            </TaskListCell>
          </>
        )}
        {endDate && (
          <>
            <TaskItemTitle>마감일시</TaskItemTitle>
            <TaskListCell>
              <span>
                <span>{moment(endDate).format('YYYY-MM-DD HH:mm')}</span>
              </span>
            </TaskListCell>
          </>
        )}
        {/* {(function name(params) {
          if (endDate) {
            return <div>1</div>;
          }
        }())} */}
      </TaskList>
      <TaskList>
        <TaskItemTitle>진척도</TaskItemTitle>
        <TaskListCell>
          <Progress progress={progress} progressHandler={progressHandler} />
        </TaskListCell>
      </TaskList>
    </>
  );
};

TaskListGroup.propTypes = {};

export { TaskListGroup };

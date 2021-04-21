import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import TaskStateGroup from '../TaskStateGroup';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import 'flatpickr/dist/themes/material_green.css';

const CreateTaskList = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  console.log(startDate.toLocaleString());
  const stateHandler = () => {
    console.log('andidy');
  };
  const dateClear = () => {
    setStartDate('');
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
          <Flatpickr data-enable-time value={startDate} options={{ minDate: new Date() }} onChange={(date) => setStartDate(date)} />
          {startDate.toLocaleString()}
          <button onClick={dateClear}>지우기</button>
        </TaskListCell>
        <TaskItemTitle>마감일시</TaskItemTitle>
        <TaskListCell>
          <Flatpickr
            data-enable-time
            value={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </TaskListCell>
      </TaskList>
    </>
  );
};

CreateTaskList.propTypes = {

};

export { CreateTaskList };

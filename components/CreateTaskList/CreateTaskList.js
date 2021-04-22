import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import TaskStateGroup from '../TaskStateGroup';
import { TaskList, TaskItemTitle, TaskListCell } from './styles';
import 'flatpickr/dist/themes/material_green.css';
import moment from 'moment';

const CreateTaskList = () => {
  const [startDate, setStartDate] = useState('');
  console.log('startDate', moment(startDate[0]).format('YYYY-MM-DDTHH:mm:ss'));
  const [endDate, setEndDate] = useState('');
  console.log('endDate', moment(endDate[0]).format('YYYY-MM-DDTHH:mm:ss'));

  const stateHandler = () => {
    console.log('andidy');
  };
  const startDateClear = () => {
    setStartDate('');
  };
  const endDateClear = () => {
    setEndDate('');
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
          <Flatpickr
            data-enable-time
            value={startDate}
            options={
              {
                minDate: new Date(),
                dateFormat: 'Y-m-d H:i',
              }
            }
            onChange={(date) => setStartDate(date)}
          />
          {startDate && <button onClick={startDateClear}>지우기</button>}
        </TaskListCell>
        <TaskItemTitle>마감일시</TaskItemTitle>
        <TaskListCell>
          <Flatpickr
            data-enable-time
            value={endDate}
            options={
              {
                minDate: new Date(),
                dateFormat: 'Y-m-d H:i',
              }
            }
            onChange={(date) => setEndDate(date)}
          />
          {endDate && <button onClick={endDateClear}>지우기</button>}
        </TaskListCell>
      </TaskList>
    </>
  );
};

CreateTaskList.propTypes = {

};

export { CreateTaskList };

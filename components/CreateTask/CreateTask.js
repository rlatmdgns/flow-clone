import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import useInput from '../../hooks/useInput';
import 'flatpickr/dist/themes/material_green.css';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';
import { TitleInput, TaskContentText, Footer, CreateButton, TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';

const CreateTask = ({submitType}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [title, onChangeTitle] = useInput('');
  const [content, setContent] = useState({
    html: ``,
    editable: false,
  });
  const [taskState, setTaskState] = useState('REQUEST');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  let taskStartDate;
  let taskEndDate;
  if (startDate !== null || startDate !== undefined || startDate !== '') {
    taskStartDate = moment(startDate[0]).format('YYYY-MM-DDTHH:mm:ss');
  }
  if (startDate !== null || startDate !== undefined || startDate !== '') {
    taskEndDate = moment(endDate[0]).format('YYYY-MM-DDTHH:mm:ss');
  }

  const startDateClear = () => {
    setStartDate('');
  };
  const endDateClear = () => {
    setEndDate('');
  };
  const stateHandler = (type) => {
    setTaskState(type);
  };
  const onChangeContent = (e) => {
    setContent({ html: e.target.value });
  };

  const submitHandler = () => {
    dispatch({
      type: submitType,
      data: {
        title: title,
        taskStatus: taskState,
        startDate: taskStartDate,
        endDate: taskEndDate,
        managers: [],
        userId: 'rlatmdgns94',
        projectId: id,
        priority: 'NORMAL',
        progress: 0,
        context : content.html
      },
    });
  };
  return (
    <div>
      <TitleInput
        type="text"
        title="제목을 입력하세요."
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
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
            options={{
              minDate: new Date(),
              dateFormat: 'Y-m-d H:i',
            }}
            onChange={(date) => setStartDate(date)}
          />
          {startDate && (
            <button type="button" onClick={startDateClear}>
              지우기
            </button>
          )}
        </TaskListCell>
        <TaskItemTitle>마감일시</TaskItemTitle>
        <TaskListCell>
          <Flatpickr
            data-enable-time
            value={endDate}
            options={{
              minDate: new Date(),
              dateFormat: 'Y-m-d H:i',
            }}
            onChange={(date) => setEndDate(date)}
          />
          {endDate && (
            <button type="button" onClick={endDateClear}>
              지우기
            </button>
          )}
        </TaskListCell>
      </TaskList>
      {/* <TaskContentText 
      contentEditable="true"
       placeholder="업무내용을 입력하세요" 
       onChange={onChangeContent}
       html={content.html} // innerHTML of the editable div
       /> */}
      <ContentEditable
        className="editable"
        tagName="pre"
        html={content.html} // innerHTML of the editable div
        onChange={onChangeContent} // handle innerHTML change
        // onBlur={sanitize}
      />
      {/* <ContentEditable html={text.current} onBlur={sanitize} onChange={onChangeContent} /> */}
      <Footer>
        <CreateButton type="button" onClick={submitHandler}>
          올리기
        </CreateButton>
      </Footer>
    </div>
  );
};

CreateTask.propTypes = {};

export { CreateTask };

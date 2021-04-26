import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import useInput from '../../hooks/useInput';
import 'flatpickr/dist/themes/material_green.css';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';
import { TitleInput, TaskContentText, Footer, CreateButton, TaskList, TaskItemTitle, TaskListCell } from './styles';
import TaskStateGroup from '../TaskStateGroup';

const CreateTask = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle] = useInput('');
  const [content, setContent] = useState({
    html: ``,
    editable: false,
  });
  console.log(content);
  // const text = useRef('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  console.log('startDate', moment(startDate[0]).format('YYYY-MM-DDTHH:mm:ss'));
  console.log('endDate', moment(endDate[0]).format('YYYY-MM-DDTHH:mm:ss'));
  const startDateClear = () => {
    setStartDate('');
  };
  const endDateClear = () => {
    setEndDate('');
  };
  const stateHandler = () => {
    console.log('Asdasas');
  };
  const onChangeContent = (e) => {
    setContent({ html: e.target.value });
    // text.current = e.target.value;
  };
  const sanitizeConf = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
    allowedAttributes: { a: ['href'] },
  };
  const sanitize = () => {
    setContent({ html: sanitizeHtml(content.html, sanitizeConf) });
  };
  const onDrag = (e) => {
    const data = e.dataTransfer.getData("text/plain");
    console.log(data)
  };
  const submitHandler = ({ submitType }) => {
    dispatch({
      type: submitType,
      data: {
        title: 'test',
        taskStatus: 'REQUEST',
        userId: 'rlatmdgns94',
        projectId: 1,
        priority: 'NORMAL',
        progress: 0,
      },
    });
  };
  return (
    <div>
      <TitleInput
        itype="text"
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
        draggable="true"
        onDrag={onDrag}
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

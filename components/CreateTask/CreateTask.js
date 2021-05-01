import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import useInput from '../../hooks/useInput';
import 'flatpickr/dist/themes/material_green.css';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';
import {
  TitleInput,
  TaskContentText,
  TextEditable,
  Footer,
  CreateButton,
  TaskList,
  TaskItemTitle,
  TaskListCell,
} from './styles';
import TaskStateGroup from '../TaskStateGroup';
import CreateProgress from '../CreateProgress';
import { useSelector } from 'react-redux';

const CreateTask = ({ submitType }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { id } = router.query;
  const [title, onChangeTitle] = useInput('');
  const [taskState, setTaskState] = useState('REQUEST');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [content, setContent] = useState({
    html: ``,
    editable: false,
  });
  const [progress, setProgress] = useState(0);

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
  const progressHandler = (data) => {
    setProgress(data);
  };
  const submitHandler = () => {
    dispatch({
      type: submitType,
      data: {
        title: title,
        taskStatus: taskState,
        startDate: startDate,
        endDate: endDate,
        managers: [],
        userId: me.id,
        projectId: id,
        priority: 'NORMAL',
        progress: progress,
        context: content.html,
      },
      writerName:me.name
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
            onChange={(date) => setStartDate(moment(date[0]).format('YYYY-MM-DDTHH:mm:ss'))}
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
            onChange={(date) => setEndDate(moment(date[0]).format('YYYY-MM-DDTHH:mm:ss'))}
          />
          {endDate && (
            <button type="button" onClick={endDateClear}>
              지우기
            </button>
          )}
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>진척도</TaskItemTitle>
        <TaskListCell>
          <CreateProgress progress={progress} progressHandler={progressHandler} />
        </TaskListCell>
      </TaskList>
      {/* <TaskContentText 
      contentEditable="true"
       placeholder="업무내용을 입력하세요" 
       onChange={onChangeContent}
       html={content.html} // innerHTML of the editable div
       /> */}
      <TextEditable>
        <ContentEditable
          className="editable"
          tagName="div"
          html={content.html} // innerHTML of the editable div
          onChange={onChangeContent} // handle innerHTML change
          // onBlur={sanitize}
          placeholder="글을 입력하세요"
        />
      </TextEditable>
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

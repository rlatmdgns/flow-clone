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
import { EDIT_TASK_REQUEST } from '../../reducers/project';

const EditTask = ({ editMode, editCloseHandle }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { projectPosts } = useSelector((state) => state.project);
  const editPost = projectPosts.find((v) => v.id === editMode.postId);
  const { id } = router.query;
  const [title, onChangeTitle] = useInput(editPost.contents.title);
  const [taskState, setTaskState] = useState(editPost.contents.taskStatus);
  const [startDate, setStartDate] = useState(editPost.contents.startDate);
  const [endDate, setEndDate] = useState(editPost.contents.endDate);
  const [content, setContent] = useState({
    html: `${editPost.contents.context}`,
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
  const onClickEdit = () => {
    dispatch({
      type: EDIT_TASK_REQUEST,
      data: {
        postId: editPost.id,
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
          <TaskStateGroup stateHandler={stateHandler} taskStatus={taskState} />
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
      <Footer>
        <CreateButton type="button" onClick={editCloseHandle}>
          취소ㄹ
        </CreateButton>
        <CreateButton type="button" onClick={onClickEdit}>
          수정
        </CreateButton>
      </Footer>
    </div>
  );
};

EditTask.propTypes = {};

export { EditTask };

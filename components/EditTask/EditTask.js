import React, { useState, useEffect } from 'react';
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
  AddManaberButton,
  ManagerItem,
  DeleteManagerButton,
  ResetButton
} from './styles';
import TaskStateGroup from '../TaskStateGroup';
import ManagerPopup from '../ManagerPopup/ManagerPopup';
import { useSelector } from 'react-redux';
import { EDIT_TASK_REQUEST, LOAD_PARTICIPANTS_REQUEST } from '../../reducers/project';
import Progress from '../Progress';
import { POPUP_MANAGER } from '../../reducers/modal';
import { useCallback } from 'react';

const EditTask = ({ editMode, editCloseHandle }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { popupManager } = useSelector((state) => state.modal);
  const { projectPosts } = useSelector((state) => state.project);
  const editPost = projectPosts.find((v) => v.id === editMode.postId);
  const { id } = router.query;
  const [title, onChangeTitle] = useInput(editPost.contents.title);
  const [taskManagers, setTaskManagers] = useState(editPost.contents.managers);
  const [taskState, setTaskState] = useState(editPost.contents.taskStatus);
  const [startDate, setStartDate] = useState(editPost.contents.startDate);
  const [endDate, setEndDate] = useState(editPost.contents.endDate);
  const [content, setContent] = useState({
    html: `${editPost.contents.context}`,
    editable: false,
  });
  const [progress, setProgress] = useState(editPost.contents.progress);
  useEffect(()=>{
    if(startDate > endDate){
      alert('시작일시는 마감일시보다 이후 날짜로 설정할 수 없습니다.')
      setStartDate('')
    }
  },[startDate, endDate])
  const startDateClear = useCallback(() => {
    setStartDate('');
  },[]);
  const endDateClear = useCallback(() => {
    setEndDate('');
  },[]);
  const stateHandler = useCallback((type) => {
    setTaskState(type);
  },[]);
  const onManager = useCallback(() => {
    dispatch({
      type: POPUP_MANAGER,
      data: true,
    });
    dispatch({
      type: LOAD_PARTICIPANTS_REQUEST,
      data: id,
    });
  },[]);
  const addManager = useCallback((data) => {
    setTaskManagers(data);
    dispatch({
      type: POPUP_MANAGER,
      data: false,
    });
  },[]);
  const deleteManager = useCallback((id) => {
    setTaskManagers(taskManagers.filter((v) => v.id !== id));
  },[]);
  const onChangeContent =useCallback((e) => {
    setContent({ html: e.target.value });
  },[]);
  const progressHandler = useCallback((data) => {
    setProgress(data);
  },[]);
  const onClickEdit = useCallback(() => {
    dispatch({
      type: EDIT_TASK_REQUEST,
      data: {
        postId: editPost.id,
        title: title,
        taskStatus: taskState,
        startDate: startDate,
        endDate: endDate,
        managers: taskManagers  ,
        userId: me.id,
        projectId: id,
        priority: 'NORMAL',
        progress: progress,
        context: content.html,
      },
    });
  },[title,taskState,startDate,endDate,taskManagers,progress,content]);
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
          {taskManagers.map((v) => {
            return (
              <ManagerItem key={v.id}>
                {v.name}
                <DeleteManagerButton type="button" onClick={() => deleteManager(v.id)}>
                  x
                </DeleteManagerButton>
              </ManagerItem>
            );
          })}
          <AddManaberButton type="button" onClick={onManager}>
            담당자 추가
          </AddManaberButton>
          {popupManager && <ManagerPopup addManager={addManager} taskManagers={taskManagers} />}
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
            <DeleteManagerButton type="button" onClick={startDateClear}>
              x 
            </DeleteManagerButton>
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
            <DeleteManagerButton type="button" onClick={endDateClear}>
               x 
            </DeleteManagerButton>
          )}
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>진척도</TaskItemTitle>
        <TaskListCell>
          <Progress progress={progress} progressHandler={progressHandler} />
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
        <ResetButton type="button" onClick={editCloseHandle}>
          취소
        </ResetButton>
        <CreateButton type="button" onClick={onClickEdit}>
          수정
        </CreateButton>
      </Footer>
    </div>
  );
};

EditTask.propTypes = {};

export { EditTask };

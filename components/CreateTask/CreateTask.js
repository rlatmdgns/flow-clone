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
  AddManaberButton,
  ManagerItem,
  DeleteManagerButton,
} from './styles';
import TaskStateGroup from '../TaskStateGroup';
import { useSelector } from 'react-redux';
import Progress from '../Progress';
import ManagerPopup from '../ManagerPopup/ManagerPopup';
import { LOAD_PARTICIPANTS_REQUEST } from '../../reducers/project';
import { POPUP_MANAGER } from '../../reducers/modal';
import { Manager } from '../ManagerPopup/styles';
import { useEffect } from 'react';
import { useCallback } from 'react';

const CreateTask = ({ submitType }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { popupManager } = useSelector((state) => state.modal);
  const { createPostDone } = useSelector((state) => state.project);
  const { id } = router.query;
  const [title, onChangeTitle] = useInput('');
  const [taskManagers, setTaskManagers] = useState([]);
  const [taskState, setTaskState] = useState('REQUEST');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [content, setContent] = useState({
    html: ``,
    editable: false,
  });
  const [progress, setProgress] = useState(0);
  useEffect(()=>{
    if(createPostDone){
      setTaskManagers([])
      setTaskState('REQUEST');
      setStartDate(null)
      setContent({
        html: ``,
        editable: false,
      })
    }
  },[createPostDone])
  const startDateClear = useCallback(() => {
    setStartDate('');
  },[]);
  const endDateClear =useCallback(() => {
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
    setTaskManagers(data)
    dispatch({
      type: POPUP_MANAGER,
      data: false,
    });
  },[])
  const deleteManager = useCallback((id) => {
    setTaskManagers(taskManagers.filter((v)=>
      v.id !== id
    ))
  },[])
  const onChangeContent = useCallback((e) => {
    setContent({ html: e.target.value });
  },[]);
  const progressHandler = useCallback((data) => {
    setProgress(data);
  },[]);
  useEffect(()=>{
    if(startDate > endDate){
      alert('시작일시는 마감일시보다 이후 날짜로 설정할 수 없습니다.')
      setStartDate('')
    }
  },[startDate, endDate])
  const submitHandler = useCallback(() => {
    dispatch({
      type: submitType,
      data: {
        title: title,
        taskStatus: taskState,
        startDate: startDate,
        endDate: endDate,
        managersInfo: taskManagers,
        userId: me.id,
        projectId: id,
        priority: 'NORMAL',
        progress: progress,
        context: content.html,
      },
      replies:[],
      writerName:me.name,
      writerId: me.id,
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
          <TaskStateGroup taskStatus={taskState} stateHandler={stateHandler} />
        </TaskListCell>
      </TaskList>
      <TaskList>
        <TaskItemTitle>담당자</TaskItemTitle>
        <TaskListCell>
          <div>
            {taskManagers.map((v)=>{
              return <ManagerItem key={v.id} >{v.name}<DeleteManagerButton type="button" onClick={()=> deleteManager(v.id)}>x</DeleteManagerButton></ManagerItem>
            })}
            <AddManaberButton type="button" onClick={onManager}>담당자 추가</AddManaberButton>
            {popupManager && <ManagerPopup addManager={addManager} taskManagers={taskManagers}/>}
          </div>
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
          <Progress progress={progress} progressHandler={progressHandler}/>
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

import axios from 'axios';
import qs from 'qs';
import { all, fork, put, call, takeLatest, throttle } from 'redux-saga/effects';
import {
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_FAILURE,
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_REQUEST,
  STATE_CHANGE_FAILURE,
  STATE_CHANGE_REQUEST,
  STATE_CHANGE_SUCCESS,
} from '../reducers/project';
import { CREATE_PROJECT, CREATE_POST } from '../reducers/modal';

function loadPostsAPI(data, projectId) {
  // return axios.get('/posts/1?page=0&size=20&userId=rlatmdgns94');
  // return axios.get(`/posts/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
  return axios.get(`/posts/${projectId}?`, {
    params: data,
  });
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data, action.projectId);
    console.log(result, 'resultresultresult');
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error,
    });
  }
}

function stateChangeAPI(data) {
  return axios.put('/task/status', data);
}

function* stateChange(action) {
  try {
    yield call(stateChangeAPI, action.data);
    yield put({
      type: STATE_CHANGE_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: STATE_CHANGE_FAILURE,
      error,
    });
  }
}

function createTaskAPI(data) {
  console.log(data);
  return axios.post('/task', data);
}

function* createTask(action) {
  console.log(action);
  try {
    const result = yield call(createTaskAPI, action.data);
    console.log('resultresultresult', result);
    yield put({
      type: CREATE_TASK_SUCCESS,
      data: {
        contents: {
          title: action.data.title,
          taskStatus: action.data.taskStatus,
          startDate: action.data.startDate,
          endDate: action.data.endDate,
          managers: action.data.managers,
          userId: action.data.userId,
          projectId: action.data.projectId,
          priority: action.data.priority,
          progress: action.data.progress,
          context: action.data.context,
        },
      },
    });
    yield put({
      type: CREATE_POST,
      data: false,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: CREATE_TASK_FAILURE,
      error,
    });
  }
}

function projectAddAPI(data) {
  return axios.post('/project', data);
}

function* projectAdd(action) {
  try {
    const result = yield call(projectAddAPI, action.data);
    console.log(',resultresultresult', result.data);
    yield put({
      type: PROJECT_ADD_SUCCESS,
      data: { id: result.data.projectId, title: action.data.title },
    });
    yield put({
      type: CREATE_PROJECT,
      data: false,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: PROJECT_ADD_FAILURE,
      error,
    });
  }
}

function loadProjectsAPI(data) {
  return axios.get('/normal', {
    params: data,
  });
}

function* loadProjects(action) {
  console.log(action);
  try {
    const result = yield call(loadProjectsAPI, action.data);
    console.log('hasNext', result.data.hasNext);
    yield put({
      type: LOAD_PROJECTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_PROJECTS_FAILURE,
      error,
    });
  }
}
function* watchStateChange() {
  yield takeLatest(STATE_CHANGE_REQUEST, stateChange);
}

function* watchCreateTask() {
  yield takeLatest(CREATE_TASK_REQUEST, createTask);
}

function* watchProjectAdd() {
  yield takeLatest(PROJECT_ADD_REQUEST, projectAdd);
}

function* watchLoadPosts() {
  yield throttle(3000, LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadProject() {
  yield throttle(3000, LOAD_PROJECTS_REQUEST, loadProjects);
}

export default function* projectSaga() {
  yield all([
    fork(watchStateChange),
    fork(watchLoadPosts),
    fork(watchCreateTask),
    fork(watchProjectAdd),
    fork(watchLoadProject),
  ]);
}

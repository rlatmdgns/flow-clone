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
  PROGRESS_CHANGE_FAILURE,
  PROGRESS_CHANGE_REQUEST,
  PROGRESS_CHANGE_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  EDIT_TASK_REQUEST,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  LOAD_PARTICIPANTS_FAILURE,
  LOAD_PARTICIPANTS_REQUEST,
  LOAD_PARTICIPANTS_SUCCESS,
} from '../reducers/project';
import { CREATE_PROJECT, CREATE_POST } from '../reducers/modal';
import { EDIT_MODE } from '../reducers/user';

function loadParticipantsAPI(data) {
  return axios.get(`/participants/${data}`);
}

function* loadParticipants(action) {
  try {
    const result = yield call(loadParticipantsAPI, action.data);
    yield put({
      type: LOAD_PARTICIPANTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_PARTICIPANTS_FAILURE,
      error,
    });
  }
}

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

function likePostAPI(data) {
  return axios.post('/post/like', data);
}

function* likePost(action) {
  try {
    yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LIKE_POST_FAILURE,
      error,
    });
  }
}

function unlikePostAPI(data) {
  return axios.delete('/post/like', { data });
}

function* unlikePost(action) {
  try {
    yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: UNLIKE_POST_FAILURE,
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
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: STATE_CHANGE_FAILURE,
      error,
    });
  }
}

function progressChangeAPI(data) {
  return axios.put('/task/progress', data);
}

function* progressChange(action) {
  try {
    yield call(progressChangeAPI, action.data);
    yield put({
      type: PROGRESS_CHANGE_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: PROGRESS_CHANGE_FAILURE,
      error,
    });
  }
}

function createTaskAPI(data) {
  return axios.post('/task', data);
}

function* createTask(action) {
  try {
    const result = yield call(createTaskAPI, action.data);
    console.log(result.data, '업무등록');
    yield put({
      type: CREATE_TASK_SUCCESS,
      data: {
        id: result.data.id,
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
          taskNumber: result.data.taskNumber,
        },
        likes: [],
        createdAt: result.data.createdAt,
        writerName: action.writerName,
        writerId: action.writerId,
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

function editTaskAPI(data) {
  return axios.put('/task', data);
}

function* editTask(action) {
  try {
    const result = yield call(editTaskAPI, action.data);
    yield put({
      type: EDIT_TASK_SUCCESS,
      data: {
        postId: action.data.postId,
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
      type: EDIT_MODE,
      data: false,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: EDIT_TASK_FAILURE,
      error,
    });
  }
}

function deletePostAPI(data) {
  return axios.delete('/post', {
    data,
  });
}

function* deletePost(action) {
  try {
    yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: { postId: action.data.postId, userId: action.data.userId },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: DELETE_POST_FAILURE,
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

function* watchLoadParticipants() {
  yield takeLatest(LOAD_PARTICIPANTS_REQUEST, loadParticipants);
}
function* watchLikePostChange() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnLikePostChange() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchStateChange() {
  yield takeLatest(STATE_CHANGE_REQUEST, stateChange);
}
function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

function* watchProgressChange() {
  yield takeLatest(PROGRESS_CHANGE_REQUEST, progressChange);
}

function* watchEditTask() {
  yield takeLatest(EDIT_TASK_REQUEST, editTask);
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
    fork(watchLoadParticipants),
    fork(watchUnLikePostChange),
    fork(watchLikePostChange),
    fork(watchDeletePost),
    fork(watchStateChange),
    fork(watchProgressChange),
    fork(watchLoadPosts),
    fork(watchEditTask),
    fork(watchCreateTask),
    fork(watchProjectAdd),
    fork(watchLoadProject),
  ]);
}

import axios from 'axios';
import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_FAILURE,
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_REQUEST,
} from '../reducers/project';

function projectAddAPI(data) {
  return axios.post('/project', data);
}

function* projectAdd(action) {
  try {
    const result = yield call(projectAddAPI, action.data);
    console.log(result.data);
    yield put({
      type: PROJECT_ADD_SUCCESS,
      data: { id: result.data, title: action.data.title },
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
  return axios.get('/normal', data);
}

function* loadProjects(action) {
  try {
    const result = yield call(loadProjectsAPI, action.data);
    console.log('loadProjects', result);
    yield put({
      type: LOAD_PROJECTS_SUCCESS,
      data: result.data.projectList,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_PROJECTS_FAILURE,
      error,
    });
  }
}

function* watchProjectAdd() {
  yield takeLatest(PROJECT_ADD_REQUEST, projectAdd);
}
function* watchLoadProject() {
  yield takeLatest(LOAD_PROJECTS_REQUEST, loadProjects);
}

export default function* projectSaga() {
  yield all([fork(watchProjectAdd), fork(watchLoadProject)]);
}

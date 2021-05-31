import qs from 'qs';
import axios from 'axios';
import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  MY_INFO_FAILURE,
  MY_INFO_SUCCESS,
  MY_INFO_REQUEST,
} from '../reducers/user';

function signUpAPI(data) {
  return axios.post('/signup', data);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

function loginAPI(data) {
  return axios.post('/login', qs.stringify(data));
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    const { token } = result.data;
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data.username,
    });
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    document.cookie = `token=${token}`;
    document.cookie = `userId=${action.data.username}`;
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}
function userAPI() {
  return axios.get('/user-info');
}

function* user() {
  try {
    const result = yield call(userAPI);
    yield put({
      type: MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: MY_INFO_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchUser() {
  yield takeLatest(MY_INFO_REQUEST, user);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchUser),
  ]);
}

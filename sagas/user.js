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
} from '../reducers/user';

function signUpAPI(data) {
  return axios.post('/signup', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log('result', result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    console.log('error', error);
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
    console.log('result', result);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogin)]);
}

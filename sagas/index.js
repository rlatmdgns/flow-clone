import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import userSaga from './user';
import projectSaga from './project';

const cookies = new Cookies();
const token = cookies.get('token');

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(projectSaga),
  ]);
}

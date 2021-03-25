import { authService } from "../firebase";
import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';


function signUpAPI(data) {
  authService.createUserWithEmailAndPassword(data.email, data.password)
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log("result",result);
    // yield call(
    //   [authService, authService.createUserWithEmailAndPassword],
    //   action.data.email,
    //   action.data.password
    // );
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.log(err)
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp)
  ]);
}
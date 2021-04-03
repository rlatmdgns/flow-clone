import produce from 'immer';

export const initialState = {
  currentPage: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  me: null,
};
// 액션타입
export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_PAGE_TITLE:
      draft.currentPage = action.data;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error.message;
      break;
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      draft.loginDone = null;
      draft.loginError = false;
      break;
    case LOGIN_SUCCESS:
      draft.loginLoading = false;
      draft.me = action.data;
      draft.loginDone = true;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginError = action.error;
      break;
    default:
      return state;
  }
});

export default reducer;

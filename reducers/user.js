import produce from 'immer';

export const initialState = {
  currentPage:null,
  signUpLoading: false, // 로그아웃 시도 중
  signUpDone: false,
  signUpError: null,
}
// 액션타입
export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_PAGE_TITLE:
      draft.currentPage = action.data
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
      draft.signUpError = action.error;
      break;
    default:
      return state;
  }
});

export default reducer;

import produce from 'immer';

export const initialState = {
  createProject: false,
  createPost: false,
  popupManager: false,
};
// 액션타입
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_POST = 'CREATE_POST';
export const POPUP_MANAGER = 'POPUP_MANAGER';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CREATE_PROJECT:
      draft.createProject = action.data;
      break;
    case CREATE_POST:
      draft.createPost = action.data;
      break;
    case POPUP_MANAGER:
      draft.popupManager = action.data;
      break;
    default:
      return state;
  }
});

export default reducer;

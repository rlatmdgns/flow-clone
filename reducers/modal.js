import produce from 'immer';

export const initialState = {
  createProject: false,
  createPost: false,
};
// 액션타입
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_POST = 'CREATE_POST';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CREATE_PROJECT:
      draft.createProject = action.data;
      break;
    case CREATE_POST:
      draft.createPost = action.data;
      break;
    default:
      return state;
  }
});

export default reducer;

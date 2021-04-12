import produce from 'immer';

export const initialState = {
  createProject: false,
};
// 액션타입
export const CREATE_PROJECT = 'CREATE_PROJECT';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CREATE_PROJECT:
      draft.createProject = action.data;
      break;
    default:
      return state;
  }
});

export default reducer;

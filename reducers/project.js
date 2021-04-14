import produce from 'immer';

export const initialState = {
  projectAddLoading: false,
  projectAddDone: false,
  projectAddError: null,
  loadProjectsLoading: false,
  loadProjectsDone: false,
  loadProjectsError: null,
  projects: [],
  hasNext: false,
};
// 액션타입

export const PROJECT_ADD_REQUEST = 'PROJECT_ADD_REQUEST';
export const PROJECT_ADD_SUCCESS = 'PROJECT_ADD_SUCCESS';
export const PROJECT_ADD_FAILURE = 'PROJECT_ADD_FAILURE';

export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case PROJECT_ADD_REQUEST:
      draft.projectAddLoading = true;
      draft.projectAddError = null;
      draft.projectAddDone = false;
      break;
    case PROJECT_ADD_SUCCESS:
      draft.projectAddLoading = false;
      draft.projects.unshift(action.data);
      draft.projectAddDone = true;
      break;
    case PROJECT_ADD_FAILURE:
      draft.projectAddLoading = false;
      draft.projectAddError = action.error;
      break;
    case LOAD_PROJECTS_REQUEST:
      draft.loadProjectsLoading = true;
      draft.loadProjectsError = null;
      draft.loadProjectsDone = false;
      break;
    case LOAD_PROJECTS_SUCCESS:
      draft.loadProjectsLoading = false;
      draft.projects = draft.projects.concat(action.data.projectList);
      draft.loadProjectsDone = true;
      draft.hasNext = action.data.hasNext;
      break;
    case LOAD_PROJECTS_FAILURE:
      draft.loadProjectsLoading = false;
      draft.loadProjectsError = action.error;
      break;
    default:
      return state;
  }
});

export default reducer;

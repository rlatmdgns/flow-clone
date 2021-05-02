import produce from 'immer';

export const initialState = {
  projectAddLoading: false,
  projectAddDone: false,
  projectAddError: null,
  loadProjectsLoading: false,
  loadProjectsDone: false,
  loadProjectsError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  createPostLoading: false,
  createPostDone: false,
  createPostError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  editPostLoading: false,
  editPostDone: false,
  editPostError: null,
  stateChangeLoading: false,
  stateChangeDone: false,
  stateChangeError: null,
  progressChangeLoading: false,
  progressChangeDone: false,
  progressChangeError: null,
  projects: [],
  projectPosts: [],
  hasNext: false,
};

// 액션타입
export const PROGRESS_CHANGE_REQUEST = 'PROGRESS_CHANGE_REQUEST';
export const PROGRESS_CHANGE_SUCCESS = 'PROGRESS_CHANGE_SUCCESS';
export const PROGRESS_CHANGE_FAILURE = 'PROGRESS_CHANGE_FAILURE';

export const STATE_CHANGE_REQUEST = 'STATE_CHANGE_REQUEST';
export const STATE_CHANGE_SUCCESS = 'STATE_CHANGE_SUCCESS';
export const STATE_CHANGE_FAILURE = 'STATE_CHANGE_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const PROJECT_ADD_REQUEST = 'PROJECT_ADD_REQUEST';
export const PROJECT_ADD_SUCCESS = 'PROJECT_ADD_SUCCESS';
export const PROJECT_ADD_FAILURE = 'PROJECT_ADD_FAILURE';

export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case PROGRESS_CHANGE_REQUEST:
      draft.progressChangeLoading = true;
      draft.progressChangeError = null;
      draft.progressChangeDone = false;
      break;
    case PROGRESS_CHANGE_SUCCESS:
      draft.progressChangeLoading = false;
      draft.progressChangeDone = true;
      break;
    case PROGRESS_CHANGE_FAILURE:
      draft.progressChangeLoading = false;
      draft.progressChangeError = action.error;
      break;
    case STATE_CHANGE_REQUEST:
      draft.stateChangeLoading = true;
      draft.stateChangeError = null;
      draft.stateChangeDone = false;
      break;
    case STATE_CHANGE_SUCCESS:
      draft.stateChangeLoading = false;
      draft.stateChangeDone = true;
      break;
    case STATE_CHANGE_FAILURE:
      draft.stateChangeLoading = false;
      draft.stateChangeError = action.error;
      break;
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsError = null;
      draft.loadPostsDone = false;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.projectPosts = draft.projectPosts.concat(action.data.postInfos);
      draft.loadPostsDone = true;
      break;
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    case CREATE_TASK_REQUEST:
      draft.createPostLoading = true;
      draft.createPostError = null;
      draft.createPostDone = false;
      break;
    case CREATE_TASK_SUCCESS:
      draft.createPostLoading = false;
      draft.projectPosts.unshift(action.data);
      draft.createPostDone = true;
      break;
    case CREATE_TASK_FAILURE:
      draft.createPostLoading = false;
      draft.createPostError = action.error;
      break;
    case EDIT_TASK_REQUEST:
      draft.editPostLoading = true;
      draft.editPostError = null;
      draft.editPostDone = false;
      break;
    case EDIT_TASK_SUCCESS:
      draft.editPostLoading = false;
      draft.projectPosts.find((v) => v.id === action.data.postId).contents = action.data.contents;
      draft.editPostDone = true;
      break;
    case EDIT_TASK_FAILURE:
      draft.editPostLoading = false;
      draft.editPostError = action.error;
      break;
    case DELETE_POST_REQUEST:
      draft.deletePostLoading = true;
      draft.deletePostError = null;
      draft.deletePostDone = false;
      break;
    case DELETE_POST_SUCCESS:
      draft.deletePostLoading = false;
      draft.projectPosts = draft.projectPosts.filter((v) => v.id !== action.data.postId);
      draft.deletePostDone = true;
      break;
    case DELETE_POST_FAILURE:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;
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

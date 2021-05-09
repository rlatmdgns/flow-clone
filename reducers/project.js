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
  loadParticipantsLoading: false,
  loadParticipantsDone: false,
  loadParticipantsError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unLikePostLoading: false,
  unLikePostDone: false,
  unLikePostError: null,
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
  addReplyLoading: false,
  addReplyDone: false,
  addReplyError: null,
  deleteReplyLoading: false,
  deleteReplyDone: false,
  deleteReplyError: null,
  editReplyLoading: false,
  editReplyDone: false,
  editReplyError: null,
  projects: [],
  projectPosts: [],
  projectParticipants: [],
  hasNext: false,
};

// 액션타입
export const ADD_REPLY_REQUEST = 'ADD_REPLY_REQUEST';
export const ADD_REPLY_SUCCESS = 'ADD_REPLY_SUCCESS';
export const ADD_REPLY_FAILURE = 'ADD_REPLY_FAILURE';

export const DELETE_REPLY_REQUEST = 'DELETE_REPLY_REQUEST';
export const DELETE_REPLY_SUCCESS = 'DELETE_REPLY_SUCCESS';
export const DELETE_REPLY_FAILURE = 'DELETE_REPLY_FAILURE';

export const EDIT_REPLY_REQUEST = 'EDIT_REPLY_REQUEST';
export const EDIT_REPLY_SUCCESS = 'EDIT_REPLY_SUCCESS';
export const EDIT_REPLY_FAILURE = 'EDIT_REPLY_FAILURE';

export const LOAD_PARTICIPANTS_REQUEST = 'LOAD_PARTICIPANTS_REQUEST';
export const LOAD_PARTICIPANTS_SUCCESS = 'LOAD_PARTICIPANTS_SUCCESS';
export const LOAD_PARTICIPANTS_FAILURE = 'LOAD_PARTICIPANTS_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

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
    case ADD_REPLY_REQUEST:
      draft.addReplyLoading = true;
      draft.addReplyError = null;
      draft.addReplyDone = false;
      break;
    case ADD_REPLY_SUCCESS:
      draft.addReplyLoading = false;
      draft.projectParticipants = action.data;
      draft.addReplyDone = true;
      break;
    case ADD_REPLY_FAILURE:
      draft.addReplyLoading = false;
      draft.addReplyError = action.error;
      break;
    case LOAD_PARTICIPANTS_REQUEST:
      draft.loadParticipantsLoading = true;
      draft.loadParticipantsError = null;
      draft.loadParticipantsDone = false;
      break;
    case LOAD_PARTICIPANTS_SUCCESS:
      draft.loadParticipantsLoading = false;
      draft.projectParticipants = action.data;
      draft.loadParticipantsDone = true;
      break;
    case LOAD_PARTICIPANTS_FAILURE:
      draft.loadParticipantsLoading = false;
      draft.loadParticipantsError = action.error;
      break;
    case UNLIKE_POST_REQUEST:
      draft.unLikePostLoading = true;
      draft.unLikePostError = null;
      draft.unLikePostDone = false;
      break;
    case UNLIKE_POST_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.unLikePostLoading = false;
      post.likes = post.likes.filter((v) => v.userId !== action.data.userId);
      draft.unLikePostDone = true;
    } break;
    case UNLIKE_POST_FAILURE:
      draft.unLikePostLoading = false;
      draft.unLikePostError = action.error;
      break;
    case LIKE_POST_REQUEST:
      draft.unLikePostLoading = true;
      draft.unLikePostError = null;
      draft.unLikePostDone = false;
      break;
    case LIKE_POST_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.likePostLoading = false;
      post.likes.push({ userId: action.data.userId });
      draft.likePostDone = true;
    } break;
    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;
    case PROGRESS_CHANGE_REQUEST:
      draft.progressChangeLoading = true;
      draft.progressChangeError = null;
      draft.progressChangeDone = false;
      break;
    case PROGRESS_CHANGE_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.progressChangeLoading = false;
      post.contents.progress = action.data.progress;
      draft.progressChangeDone = true;
    } break;
    case PROGRESS_CHANGE_FAILURE:
      draft.progressChangeLoading = false;
      draft.progressChangeError = action.error;
      break;
    case STATE_CHANGE_REQUEST:
      draft.stateChangeLoading = true;
      draft.stateChangeError = null;
      draft.stateChangeDone = false;
      break;
    case STATE_CHANGE_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.stateChangeLoading = false;
      post.contents.taskStatus = action.data.status;
      draft.stateChangeDone = true;
    } break;
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
    case EDIT_TASK_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.editPostLoading = false;
      post.contents = action.data.contents;
      draft.editPostDone = true;
    } break;
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

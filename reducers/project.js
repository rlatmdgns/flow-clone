import produce from 'immer';

export const initialState = {
  favoriteProjectLoading: false,
  favoriteProjectDone: false,
  favoriteProjectError: null,
  unFavoriteProjectLoading: false,
  unFavoriteProjectDone: false,
  unFavoriteProjectError: null,
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
  loadMembersLoading: false,
  loadMembersDone: false,
  loadMembersError: null,
  inviteMemberLoading: false,
  inviteMemberDone: false,
  inviteMemberError: null,
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
  favoriteProjects: [],
  projects: [],
  projectPosts: [],
  projectParticipants: [],
  members: [],
  hasNext: false,
};

// 액션타입
export const UNFAVORITE_PROJECT_REQUEST = 'UNFAVORITE_PROJECT_REQUEST';
export const UNFAVORITE_PROJECT_SUCCESS = 'UNFAVORITE_PROJECT_SUCCESS';
export const UNFAVORITE_PROJECT_FAILURE = 'UNFAVORITE_PROJECT_FAILURE';

export const FAVORITE_PROJECT_REQUEST = 'FAVORITE_PROJECT_REQUEST';
export const FAVORITE_PROJECT_SUCCESS = 'FAVORITE_PROJECT_SUCCESS';
export const FAVORITE_PROJECT_FAILURE = 'FAVORITE_PROJECT_FAILURE';

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

export const LOAD_MEMBERS_REQUEST = 'LOAD_MEMBERS_REQUEST';
export const LOAD_MEMBERS_SUCCESS = 'LOAD_MEMBERS_SUCCESS';
export const LOAD_MEMBERS_FAILURE = 'LOAD_MEMBERS_FAILURE';

export const INVITE_MEMBER_REQUEST = 'INVITE_MEMBER_REQUEST';
export const INVITE_MEMBER_SUCCESS = 'INVITE_MEMBER_SUCCESS';
export const INVITE_MEMBER_FAILURE = 'INVITE_MEMBER_FAILURE';

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

export const LOAD_FAVORITE_PROJECTS_REQUEST = 'LOAD_FAVORITE_PROJECTS_REQUEST';
export const LOAD_FAVORITE_PROJECTS_SUCCESS = 'LOAD_FAVORITE_PROJECTS_SUCCESS';
export const LOAD_FAVORITE_PROJECTS_FAILURE = 'LOAD_FAVORITE_PROJECTS_FAILURE';

export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case UNFAVORITE_PROJECT_REQUEST:
      draft.unFavoriteProjectLoading = true;
      draft.unFavoriteProjectError = null;
      draft.unFavoriteProjectDone = false;
      break;
    case UNFAVORITE_PROJECT_SUCCESS:
      draft.unFavoriteProjectLoading = false;
      draft.favoriteProjects = draft.favoriteProjects.filter((v) => v.id !== action.data.projectId);
      draft.projects = draft.projects.concat({
        id: action.data.projectId,
        title: action.title,
      });
      draft.unFavoriteProjectDone = true;
      break;
    case UNFAVORITE_PROJECT_FAILURE:
      draft.unFavoriteProjectLoading = false;
      draft.unFavoriteProjectError = action.error;
      break;
    case FAVORITE_PROJECT_REQUEST:
      draft.favoriteProjectLoading = true;
      draft.favoriteProjectError = null;
      draft.favoriteProjectDone = false;
      break;
    case FAVORITE_PROJECT_SUCCESS:
      draft.favoriteProjectLoading = false;
      draft.projects = draft.projects.filter((v) => v.id !== action.data.projectId);
      draft.favoriteProjects = draft.favoriteProjects.concat({
        id: action.data.projectId,
        title: action.title,
      });
      draft.favoriteProjectDone = true;
      break;
    case FAVORITE_PROJECT_FAILURE:
      draft.favoriteProjectLoading = false;
      draft.favoriteProjectError = action.error;
      break;
    case DELETE_REPLY_REQUEST:
      draft.deleteReplyLoading = true;
      draft.deleteReplyError = null;
      draft.deleteReplyDone = false;
      break;
    case DELETE_REPLY_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.data.postId);
      draft.deleteReplyLoading = false;
      post.replies = post.replies.filter((v) => v.id !== action.data.replyId);
      draft.deleteReplyDone = true;
    }
      break;
    case DELETE_REPLY_FAILURE:
      draft.deleteReplyLoading = false;
      draft.deleteReplyError = action.error;
      break;
    case EDIT_REPLY_REQUEST:
      draft.editReplyLoading = true;
      draft.editReplyError = null;
      draft.editReplyDone = false;
      break;
    case EDIT_REPLY_SUCCESS: {
      draft.editReplyLoading = false;
      const post = draft.projectPosts.find((v) => v.id === action.postId);
      post.replies.find((v) => v.id === action.data.replyId).contents = action.data.contents;
      draft.editReplyDone = true;
    } break;
    case EDIT_REPLY_FAILURE:
      draft.editReplyLoading = false;
      draft.editReplyError = action.error;
      break;
    case ADD_REPLY_REQUEST:
      draft.addReplyLoading = true;
      draft.addReplyError = null;
      draft.addReplyDone = false;
      break;
    case ADD_REPLY_SUCCESS: {
      const post = draft.projectPosts.find((v) => v.id === action.postId);
      draft.addReplyLoading = false;
      post.replies.push(action.data);
      draft.addReplyDone = true;
    } break;
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
    case LOAD_MEMBERS_REQUEST:
      draft.loadMembersLoading = true;
      draft.loadMembersError = null;
      draft.loadMembersDone = false;
      break;
    case LOAD_MEMBERS_SUCCESS:
      draft.loadMembersLoading = false;
      draft.members = action.data;
      draft.loadMembersDone = true;
      break;
    case LOAD_MEMBERS_FAILURE:
      draft.loadMembersLoading = false;
      draft.loadMembersError = action.error;
      break;
    case INVITE_MEMBER_REQUEST:
      draft.inviteMemberLoading = true;
      draft.inviteMemberError = null;
      draft.inviteMemberDone = false;
      break;
    case INVITE_MEMBER_SUCCESS:
      draft.inviteMemberLoading = false;
      draft.inviteMemberDone = true;
      break;
    case INVITE_MEMBER_FAILURE:
      draft.inviteMemberLoading = false;
      draft.inviteMemberError = action.error;
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
    case LOAD_FAVORITE_PROJECTS_REQUEST:
      draft.favoriteProjectLoading = true;
      draft.favoriteProjectError = null;
      draft.favoriteProjectDone = false;
      break;
    case LOAD_FAVORITE_PROJECTS_SUCCESS:
      draft.favoriteProjectLoading = false;
      draft.favoriteProjects = draft.favoriteProjects.concat(action.data.projectList);
      draft.favoriteProjectDone = true;
      draft.hasNext = action.data.hasNext;
      break;
    case LOAD_FAVORITE_PROJECTS_FAILURE:
      draft.favoriteProjectLoading = false;
      draft.favoriteProjectError = action.error;
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

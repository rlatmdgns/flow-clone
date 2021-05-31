import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import project from './project';
import modal from './modal';

// const rootReducer = combineReducers({
//   // index: (state = {}, action) => {
//   //   switch (action.type) {
//   //     case HYDRATE:
//   //       return {
//   //         ...state,
//   //         ...action.payload,
//   //       };
//   //     default:
//   //       return state;
//   //   }
//   // },
//   user,
// });
// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        project,
        modal,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

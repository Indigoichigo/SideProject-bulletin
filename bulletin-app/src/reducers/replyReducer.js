import { REPLY_ARTICLE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case REPLY_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};

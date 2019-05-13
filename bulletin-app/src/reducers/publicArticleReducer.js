import { PUBLIC_ARTICLE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};

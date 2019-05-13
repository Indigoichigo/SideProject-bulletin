import { REPLY_ARTICLE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case REPLY_ARTICLE:
      const { id, reply } = action.payload;

      const obj = { ...state, [id]: reply };
      console.log(obj);

      return { ...state, [id]: reply };
    default:
      return state;
  }
};

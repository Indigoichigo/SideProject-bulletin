import { FETCH_BULLETIN } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BULLETIN:
      return action.payload;
    default:
      return state;
  }
};

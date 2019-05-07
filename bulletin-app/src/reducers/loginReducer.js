import { EMPLOYEE_LOGIN } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

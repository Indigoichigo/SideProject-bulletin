// import history from '../history';
import rootApi from '../api/rootApi';
import { EMPLOYEE_LOGIN } from './types';

// CATEGORYLIST_FETCH,
export const employeeLogin = loginData => async dispatch => {
  try {
    const res = await rootApi.post('/account/login', { ...loginData });

    dispatch({
      type: EMPLOYEE_LOGIN,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: EMPLOYEE_LOGIN,
      payload: e.response,
    });
  }
};

// import history from '../history';
import rootApi from '../api/rootApi';
import { EMPLOYEE_LOGIN } from './types';

// CATEGORYLIST_FETCH,
export const employeeLogin = (loginData, history) => async dispatch => {
  try {
    const res = await rootApi.post('/account/login', { ...loginData });

    if (res.data.code === 200) {
      sessionStorage.setItem('bulletin_token', res.data.token);
      sessionStorage.setItem('card_no', res.data.data.cardNo);
      sessionStorage.setItem('isLogin', '1');
    }

    dispatch({
      type: EMPLOYEE_LOGIN,
      payload: res,
    });

    history.push('/');
  } catch (e) {
    console.log(e);
  }
};

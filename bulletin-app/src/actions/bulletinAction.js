// import history from '../history';
import rootApi from '../api/rootApi';
import { FETCH_BULLETIN } from './types';

// CATEGORYLIST_FETCH,
export const fetchBulletin = () => async dispatch => {
  const res = await rootApi.get('/bulletin');

  dispatch({
    type: FETCH_BULLETIN,
    payload: res.data.data,
  });
};

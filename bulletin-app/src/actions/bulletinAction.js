import rootApi from '../api/rootApi';
import { FETCH_BULLETIN } from './types';

// PUBLIC_ARTICLE,
export const fetchBulletin = (cardNo = '') => async dispatch => {
  let res;

  const config = {
    headers: {
      cardNo: cardNo,
    },
  };

  if (cardNo === '') {
    res = await rootApi.get('/bulletin');
  } else {
    res = await rootApi.get('/bulletin', config);
  }

  dispatch({
    type: FETCH_BULLETIN,
    payload: res.data.data,
  });
};

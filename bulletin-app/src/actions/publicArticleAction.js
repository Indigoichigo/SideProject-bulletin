// import history from '../history';
import rootApi from '../api/rootApi';
import { PUBLIC_ARTICLE } from './types';
import { fetchBulletin } from './bulletinAction';

// CATEGORYLIST_FETCH,
export const publicArticle = (reqData, headerInfo) => async dispatch => {
  const res = await rootApi.post('/bulletin', reqData, headerInfo);

  fetchBulletin();

  dispatch({
    type: PUBLIC_ARTICLE,
    payload: res,
  });
};

import rootApi from '../api/rootApi';
import { FETCH_BULLETIN } from './types';

// PUBLIC_ARTICLE,
export const fetchBulletin = (cardNo = '') => async dispatch => {
  let res;
  // let cardNoParam;

  // if (cardNo === '') {
  //   cardNoParam = '';
  // } else {
  //   cardNoParam = `/?cardNo=${cardNo}`;
  // }
  // res = await rootApi.get('/bulletin' + cardNoParam);

  // console.log(cardNo);
  // const config = {
  //   headers: {
  //     cardNo: cardNo,
  //   },
  // };

  // if (cardNo === '') {
  //   console.log('1');
  //   res = await rootApi.get('/bulletin');
  // } else {
  //   console.log('2');
  //   res = await rootApi.get('/bulletin', config);
  // }

  // 可以正常運作
  res = await rootApi.get('/bulletin');

  dispatch({
    type: FETCH_BULLETIN,
    payload: res.data.data,
  });
};

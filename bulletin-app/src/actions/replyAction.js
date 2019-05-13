// import history from '../history';
import rootApi from '../api/rootApi';
import { REPLY_ARTICLE } from './types';

// REPLY_ARTICLE,
export const replyArticle = (reqData, headerInfo) => async dispatch => {
  try {
    await rootApi.post(`/bulletin/reply`, reqData, headerInfo);
  } catch (e) {
    console.log(e);
  }
};

export const fetchReplyArticle = id => async dispatch => {
  const res = await rootApi.get(`/bulletin/reply/${id}`);

  const replyObj = {
    id: res.data.data.article_id,
    reply: res.data.data.reply,
  };

  dispatch({
    type: REPLY_ARTICLE,
    payload: replyObj,
  });
};

import React from 'react';
import ReplyInput from './ReplyInput';
import ShowReply from './ShowReply';
// import { connect } from 'react-redux';
// import { fetchReplyArticle } from '../../actions/replyAction';

const ReplyArticle = props => {
  return (
    <div>
      <ReplyInput {...props} handleShowReply={props.handleShowReply} />
      {!props.showReply && <ShowReply {...props} />}
    </div>
  );
};

export default ReplyArticle;

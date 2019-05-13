import React from 'react';
import useInput from '../../useHook/useInput';
import { connect } from 'react-redux';
import { replyArticle } from '../../actions/replyAction';
import { fetchReplyArticle } from '../../actions/replyAction';

const ReplyInput = props => {
  const replyText = useInput('');

  function handleReplyArticle() {
    const reqData = {
      article_id: props.article_id,
      content: replyText.value,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('bulletin_token')}`,
      },
    };

    replyText.handleValueChange('');
    props.replyArticle(reqData, config).then(() => {
      props.fetchReplyArticle(props.article_id);
    });
  }
  return (
    <div className="reply_article_input">
      <textarea
        className="reply_article_text"
        type="input"
        placeholder="回覆點什麼 ..."
        value={replyText.value}
        onChange={replyText.handleValueChange}
      >
        >
      </textarea>
      <button
        className="reply_article_btn button_style"
        onClick={handleReplyArticle}
      >
        回覆
      </button>
    </div>
  );
};

export default connect(
  null,
  { replyArticle, fetchReplyArticle },
)(ReplyInput);

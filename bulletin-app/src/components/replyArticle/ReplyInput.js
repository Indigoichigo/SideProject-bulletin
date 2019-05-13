import React from 'react';
import useInput from '../../useHook/useInput';
import { connect } from 'react-redux';
import { replyArticle } from '../../actions/replyAction';
import { fetchReplyArticle } from '../../actions/replyAction';
import PopMessage from '../globalComponents/PopMessage';
import useTrueFalse from '../../useHook/useTrueFalse';

const ReplyInput = props => {
  const replyText = useInput('');
  const controlMsgBox = useTrueFalse(false);

  function handleReplyArticle() {
    if (sessionStorage.getItem('isLogin') !== '1') {
      controlMsgBox.onChange(true);
    }

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

  function handleCloseMsgBox() {
    controlMsgBox.onChange(false);
  }
  return (
    <div className="reply_article_input">
      {controlMsgBox.value && (
        <PopMessage text="請先登入" handleCloseMsgBox={handleCloseMsgBox} />
      )}
      <textarea
        className="reply_article_text"
        type="input"
        placeholder="回覆點什麼 ..."
        value={replyText.value}
        onChange={replyText.handleValueChange}
        onFocus={props.handleShowReply}
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

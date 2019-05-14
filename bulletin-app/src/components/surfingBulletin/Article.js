import React, { useState, useEffect } from 'react';
import ReplyArticle from '../replyArticle/ReplyArticle';
import { fetchReplyArticle } from '../../actions/replyAction';
import { connect } from 'react-redux';
import useTrueFalse from '../../useHook/useTrueFalse';
import rootApi from '../../api/rootApi';

const Article = props => {
  const showReply = useTrueFalse(true);
  const [computeLike, setComputeLike] = useState(0);

  // is just a state to watch heart may increase or decrease,
  // the true may be increase or decrease, it's depend on props.like_count
  const isHeartCountAdd = useTrueFalse(props.is_like);

  useEffect(() => {
    setComputeLike(props.like_count);
  }, [props.like_count]);

  function handleShowReply() {
    showReply.onChange(!showReply.value);
  }

  async function handleLike() {
    if (props.like_count === true) {
      if (isHeartCountAdd.value === true) {
        setComputeLike(computeLike + 1);
      } else {
        setComputeLike(computeLike - 1);
      }
    } else {
      if (isHeartCountAdd.value === true) {
        setComputeLike(computeLike - 1);
      } else {
        setComputeLike(computeLike + 1);
      }
    }
    isHeartCountAdd.onChange(!isHeartCountAdd.value);

    const articleId = {
      article_id: props.article_id,
      card_no: sessionStorage.getItem('card_no'),
    };

    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('bulletin_token')}`,
      },
    };
    const res = await rootApi.post('bulletin/like', articleId, config);
  }

  return (
    <div className="article_box">
      <div className="article_header">
        <h4 className="article_title">{props.title}</h4>
        <div className="article_author_time_wrapper">
          <p className="article_author">{props.name}</p>
          <p className="article_time">{`${props.accurateTime.year}/${
            props.accurateTime.month
          }/${props.accurateTime.date} ${props.accurateTime.hour}:${
            props.accurateTime.minute
          }`}</p>
        </div>
      </div>
      <div className="article_img_wrapper">
        <img className="article_img" src={`${props.full_img_path}`} />
      </div>
      <div className="article_content_wrapper">
        <div className="article_content">{props.content}</div>
        <div className="article_info_wrapper">
          <p className="article_info_sub_wrapper" onClick={handleLike}>
            <span className="article_icon">
              {isHeartCountAdd.value ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart" />
              )}
            </span>
            <span className="article_icon_info">{computeLike}</span>
          </p>
          <p className="article_info_sub_wrapper" onClick={handleShowReply}>
            <span className="article_icon">
              <i className="far fa-comment-dots" />
            </span>
            <span className="article_icon_info">{props.reply_count}</span>
          </p>

          <ReplyArticle
            {...props}
            showReply={showReply.value}
            handleShowReply={handleShowReply}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    replyData: state.replyData,
  };
}

export default connect(
  mapStateToProps,
  { fetchReplyArticle },
)(Article);

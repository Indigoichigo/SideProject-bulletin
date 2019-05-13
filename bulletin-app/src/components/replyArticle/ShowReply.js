import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReplyArticle } from '../../actions/replyAction';

const ShowReply = props => {
  useEffect(() => {
    props.fetchReplyArticle(props.article_id);
  }, [props.replyData.length]);

  function renderReply() {
    // 初始state為空資料還沒抓回來
    if (Object.values(props.replyData).length === 0) {
      return null;
    }

    // 資料還沒抓回來
    if (!props.replyData.hasOwnProperty(props.article_id)) {
      return null;
    }

    const data = props.replyData[props.article_id];

    data.forEach(item => {
      const date = new Date(item.timestamp * 1000);
      const fullTime = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
      };

      item.accurateTime = `${fullTime.year}/${fullTime.month}/${
        fullTime.date
      } ${fullTime.hour}:${fullTime.minute}`;
    });

    return data.map((item, index) => {
      return (
        <div className="show_reply" key={index}>
          <p className="name_time_wrapper">
            <span className="reply_name">
              {item.name ? item.name : 'anonymous'}
            </span>
            <span className="reply_time">{item.accurateTime}</span>
          </p>
          <p className="reply_content">{item.content}</p>
        </div>
      );
    });
  }

  return <div className="reply_wrapper">{renderReply()}</div>;
};

function mapStateToProps(state) {
  return {
    replyData: state.replyData,
  };
}

export default connect(
  mapStateToProps,
  { fetchReplyArticle },
)(ShowReply);

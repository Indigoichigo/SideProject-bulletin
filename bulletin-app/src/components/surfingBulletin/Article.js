import React from 'react';

const Article = props => {
  return (
    <div className="article_box">
      <div className="article_header">
        <h4 className="article_title">{props.title}</h4>
        <p className="article_author_time_wrapper">
          <span className="article_author">{props.name}</span>
          <span className="article_time">{`${props.accurateTime.year}/${
            props.accurateTime.month
          }/${props.accurateTime.date} ${props.accurateTime.hour}:${
            props.accurateTime.minute
          }`}</span>
        </p>
      </div>
      <div className="article_img_wrapper">
        <img className="article_img" src={`${props.full_img_path}`} />
      </div>
      <div className="article_content_wrapper">
        <div className="article_contnet">{props.content}</div>
        <div className="article_info_wrapper">
          <p className="article_info_sub_wrapper">
            <span className="article_icon">
              <i className="far fa-heart" />
            </span>
            <span className="article_icon_info">{props.like_count}</span>
          </p>
          <p className="article_info_sub_wrapper">
            <span className="article_icon">
              <i className="far fa-comment-dots" />
            </span>
            <span className="article_icon_info">{props.reply_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;

import React from 'react';
import ReactDOM from 'react-dom';

const PopMessage = props => {
  return ReactDOM.createPortal(
    <div className="pop_message_box">
      <div className="title_close_wrapper">
        <p className="message_title">訊息</p>
        <div className="close_wrapper" onClick={props.handleCloseMsgBox}>
          <div className="close_line" />
          <div className="close_line" />
        </div>
      </div>
      <p className="message_text">{props.text}</p>
    </div>,
    document.getElementById('pop'),
  );
};

export default PopMessage;

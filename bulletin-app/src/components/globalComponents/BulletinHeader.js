import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BulletinHeader = props => {
  const [loginLogoutText, setLoginLogoutText] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('isLogin') === '1') {
      setLoginLogoutText('登出');
    } else {
      setLoginLogoutText('登入');
    }
  });

  function handleLoginLogout() {
    if (sessionStorage.getItem('isLogin') === '1') {
      sessionStorage.removeItem('bulletin_token');
      sessionStorage.removeItem('card_no');
      sessionStorage.removeItem('isLogin');
    } else {
      props.history.push('/login');
    }
  }
  return (
    <header className="bulletin_header">
      <div className="bulletin_header_content">
        <div className="bh_left_wrapper">
          <Link to="/" className="bh_left_text">
            Bulletin
          </Link>
        </div>
        <div className="bh_right_wrapper">
          <span
            to="/login"
            className="bh_right_text"
            onClick={handleLoginLogout}
          >
            {loginLogoutText}
          </span>
        </div>
      </div>
    </header>
  );
};

export default BulletinHeader;

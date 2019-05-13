import React from 'react';
import { Link } from 'react-router-dom';

const BulletinHeader = () => {
  return (
    <header className="bulletin_header">
      <div className="bulletin_header_content">
        <div className="bh_left_wrapper">
          <Link to="/" className="bh_left_text">
            Bulletin
          </Link>
        </div>
        <div className="bh_right_wrapper">
          <Link to="/login" className="bh_right_text">
            登入
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BulletinHeader;

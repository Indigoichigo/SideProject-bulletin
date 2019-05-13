import React, { useState } from 'react';
import useInput from '../../useHook/useInput';
import { connect } from 'react-redux';
import { employeeLogin } from '../../actions/loginAction';

const Login = props => {
  console.log(props);
  const userId = useInput('0460335377');
  const userPw = useInput('');

  function handleIdInputAnimate() {
    if (userId.value === '') {
      return false;
    } else {
      return true;
    }
  }

  function handlePwInputAnimate() {
    if (userPw.value === '') {
      return false;
    } else {
      return true;
    }
  }

  function handleLogin() {
    const resData = {
      email: userId.value,
      cardNO: userId.value,
      password: userPw.value,
    };

    props.employeeLogin(resData, props.history);

    userId.handleValueChange('');
    userPw.handleValueChange('');
  }

  function handleLoginDeny() {
    console.log(props.login.status);
    const isLoginDeny = [401, 403, 404].some(
      item => props.login.status === item,
    );

    if (isLoginDeny) {
      return '帳號或密碼錯誤囉!';
    } else {
      return '';
    }
  }

  return (
    <div className="login_section">
      <div className="login_content">
        <p className="l_text">LOGIN</p>

        <div className="l_card_email_wrapper">
          <label
            className={`l_label  ${handleIdInputAnimate() &&
              'whenHasText_l_label'}`}
          >
            Card ID/Email
          </label>
          <input
            className="l_input l_card_email_input input_style"
            value={userId.value}
            onChange={e => userId.handleValueChange(e)}
          />
        </div>
        <div className="l_password_wrapper">
          <label
            className={`l_label ${handlePwInputAnimate() &&
              'whenHasText_l_label'}`}
          >
            Password
          </label>
          <input
            type="password"
            className="l_input l_pssword_input input_style"
            value={userPw.value}
            onChange={e => userPw.handleValueChange(e)}
          />
        </div>

        <div className="l_error_btn_wrapper">
          <div className="l_error_msg_wrapper">
            <p className="l_error_msg">{handleLoginDeny()}</p>
          </div>
          <div className="l_login_btn_wrapper">
            <button className="l_login_btn button_style" onClick={handleLogin}>
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(
  mapStateToProps,
  { employeeLogin },
)(Login);

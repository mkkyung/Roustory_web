import React from 'react';
import FacebookLogin from 'react-facebook-login';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, error, onCancel, onLogin, onChange, onKeyPress, onFacebookLogin, onRegister
}) => (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div className={cx('close')} onClick={onCancel}>&times;</div>
        <div className={cx('title')}>로그인</div>
        <input autoFocus type="text" name="username" placeholder="아이디 입력" onChange={onChange} onKeyPress={onKeyPress} />
        <input autoFocus type="password" name="password" placeholder="비밀번호 입력" onChange={onChange} onKeyPress={onKeyPress} />
        <div style={{width:'100%', marginTop:'9px'}}>
          <div className={cx('facebookLink')}>
            {/* <FacebookLogin
              appId="234988500534248"
              autoLoad={false}
              fields="name,email,picture"
              //callback={handleFacebookLogin}
              cssClass={cx('facebookLink')}
              icon="fa-facebook-official"
              textButton="Login with Facebook"
            /> */}
            {/* <FacebookLogin
              appId="163866667879775"
              autoLoad={false}
              fields="name"
              cssClass={cx('facebookLink')}
              icon="fa-facebook-official"
              textButton="Login with Facebook"
              // onClick={componentClicked}
              callback={onFacebookLogin} /> */}
          </div>
          {/* <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />{" "} */}
          
          {<div className={cx('forgotLink')}>Forgot password?</div>}
        </div>
        {error && <div className={cx('error')}>로그인 실패</div>}
        <div className={cx('login-contain')} >
          <div className={cx('login-contain2')} >
            <div className={cx('login')} onClick={onLogin}>로그인</div>
            <div className={cx('login')} style={{marginLeft:'18px'}}  onClick={onRegister}>회원가입</div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );

export default LoginModal;


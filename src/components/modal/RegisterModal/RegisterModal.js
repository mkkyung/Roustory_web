import React from 'react';
import FacebookLogin from 'react-facebook-login';
import styles from './RegisterModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);



const RegisterModal = ({
  visible, error, onCancel, onChange, onKeyPress, onRegister
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>회원가입</div>
      {/* <input type="text" name="firstName" placeholder="성명" onChange={onChange}/> */}
      {/* <input type="text" name="lastName" placeholder="사용자 이름" onChange={onChange}/> */}
      <input autoFocus type="text" label="이메일" name="email" placeholder="이메일" onChange={onChange} onKeyPress={onKeyPress}/>
      {/* { error && <div className={cx('error')}>잘못된 이메일 형식 입니다.</div> } */}
      <input autoFocus type="text" name="username" placeholder="아이디" onChange={onChange} onKeyPress={onKeyPress}/>
      {/* { error && <div className={cx('error')}>아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.</div> } */}
      <input autoFocus type="password" name="password" placeholder="비밀번호" onChange={onChange} onKeyPress={onKeyPress}/>
      {/* { error && <div className={cx('error')}>비밀번호를 6자 이상 입력하세요.</div> } */}
      <input autoFocus type="password" name="passwordConfirm" placeholder="비밀번호확인" onChange={onChange} onKeyPress={onKeyPress}/>
      {/* { error && <div className={cx('error')}>비밀번호확인이 일치하지 않습니다.</div> } */}
      {/* <FacebookLogin
             appId="234988500534248"
             autoLoad={false}
             fields="name,email,picture"
             cssClass={cx('facebook-login')}
             //callback={handleFacebookLogin}
             //cssClass={formStyles.button} 
             icon="fa-facebook-official"
             textButton="Log in with Facebook"
      /> */}
      { error && <div className={cx('error')}>회원가입 실패</div> }
      {<div className={cx('login')} onClick={onRegister}>회원가입</div>}
      {/* <button className="">Register</button> */}
      {/* <Link to="/" className="">Cancel</Link>  */}
    </div>
  </ModalWrapper>  
);

export default RegisterModal;

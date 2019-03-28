import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, username, password/* , logged */ } = this.props;

    try {
      // 로그인 시도, 성공 시 모달 닫기
      await BaseActions.login(username, password);
      const { logged } = this.props;
      BaseActions.hideModal('login')

      // if(logged){
      //   // alert("성공");
      //   BaseActions.hideModal('login')
      //   localStorage.logged = "true";
      //   console.log('logged', logged);
      // }else{
      //   // alert("실패");
      //   localStorage.logged = "true";
      //   console.log('logged',logged);
      // }
    } catch (e) {
    }
  }
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  }
    handleChange = (e) => {
      const { name,value } = e.target;
      const { BaseActions } = this.props;

      BaseActions.changeInput({
        name,
        value,
        form: 'loginModal'
      });
    }
    /* handlePasswordChange = (e) => {
      const { value } = e.target;
      const { BaseActions } = this.props;
      BaseActions.changePasswordInput(value);
    } */
    handleKeyPress = (e) => {
      // 엔터 키가 눌리면 로그인 호출
      if(e.key === 'Enter') { 
        this.handleLogin();
      }
    }
    handleFacebookLogin = response => {
      const { facebookLogin, logged } = this.props;
      // facebookLogin(response.name);

      // const { BaseActions } = this.props;

      // try {
      //   await BaseActions.facebookLogin();
      //   const { logged } = this.props;

      //   if(logged){
      //     BaseActions.hideModal('loginModal');
      //   }else{
      //     localStorage.logged = "true";
      //   }
      // } catch (e) {
      //   console.log(e);
      // }
    }
    

    handleRegister = () => {
      const { BaseActions } = this.props;
      BaseActions.hideModal('login');
      BaseActions.showModal('register');
    }
    
    componentWillUnmount(){
      const { BaseActions } = this.props;
      BaseActions.initializeLoginModal('loginModal');
    }

    render() {
      const { 
        handleLogin, handleCancel, handleChange, handleKeyPress, handleFacebookLogin, handleRegister
      } = this;
      const { username, password } = this.props.form.toJS();

      console.log('ㅎㅎㅎㅎ', this.props.form);

      const { visible, error } = this.props;
      return (
        <LoginModal
          onLogin={handleLogin} onCancel={handleCancel}
          onChange={handleChange} onKeyPress={handleKeyPress}
          onFacebookLogin={handleFacebookLogin} onRegister={handleRegister}
          visible={visible} error={error} username={username} password={password}
        />
      );
    }
}
  
export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    visible: state.base.getIn(['modal', 'login']),
    username: state.base.getIn(['loginModal', 'form', 'username']),
    // accessToken: state.base.getIn(['loginModal', 'accessToken']),
    password: state.base.getIn(['loginModal', 'form', 'password']),
    error: state.base.getIn(['loginModal', 'error']),
    form: state.base.getIn(['loginModal', 'form'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);

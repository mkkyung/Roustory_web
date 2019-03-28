import React, { Component } from 'react';
import RegisterModal from 'components/modal/RegisterModal';
import { isLength, isAlphanumeric, isEmail } from 'validator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class RegisterModalContainer extends Component {

    setError = (message) => {
        const { BaseActions } = this.props;
        BaseActions.setError({
            form: 'registerModal',
            message
        });
    }

    validate = {
        email: (value) => {
            if(!isEmail(value)) {
                this.setError('잘못된 이메일 형식 입니다.');
                return false;
            }
            return true;
        },
        username: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
                this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })) {
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        passwordConfirm: (value) => {
            if(value.password !== value) {      //this.props.get('password')
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null); 
            return true;
        }
    }

    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal('register');
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        const { BaseActions } = this.props;
        BaseActions.changeInput({
            name,
            value,
            form: 'registerModal'
        });

        // 검증작업 진행
        const validation = this.validate[name](value);
        if(name.indexOf('password') > -1 || !validation) return; // 비밀번호 검증이거나, 검증 실패하면 여기서 마침

        // TODO: 이메일, 아이디 중복 확인
    }
    handleKeyPress = (e) => {
        // 엔터 키가 눌리면 회원가입 호출
        if(e.key === 'Enter') { 
          this.handleRegister();
        }
    }

    handleRegister = async () => {
        const { BaseActions, email, username, password, passwordConfirm } = this.props;
        try {
          // 로그인 시도, 성공 시 모달 닫기
          await BaseActions.register(email, username, password);
          const { isRegister } = this.props;
          alert('회원 등록이 되었습니다!');
          console.log(';;;;;', isRegister);

          if(isRegister) {
            // alert("성공");
            // BaseActions.hideModal('register');
            // console.log(';;;;;');
          } else {
            // alert("실패");
            // localStorage.isRegister = "true";
            BaseActions.hideModal('register');
            console.log(';;;;;2', isRegister);
          }
        } catch (e) {
        }
    }

    handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }


    // componentWillUnmount() {
    //     const { BaseActions } = this.props;
    //     BaseActions.initializeLoginModal('loginModal')
    // }


    render() {
        const {
            handleRegister, handleCancel, handleChange, handleKeyPress, handleFacebookLogin
        } = this;
        const { /* error, */ email, username, password, passwordConfirm } = this.props.form.toJS();
        const { error, visible } = this.props;

        return (
            <RegisterModal
                onRegister={handleRegister} onCancel={handleCancel}
                onChange={handleChange} onKeyPress={handleKeyPress}
                onFacebookLogin={handleFacebookLogin}
                visible={visible} error={error} email={email} username={username} password={password} passwordConfirm={passwordConfirm}
            />
        );
    }
}

export default connect(
    (state) => ({
        isRegister: state.base.get('isRegister'),
        visible: state.base.getIn(['modal', 'register']),
        email: state.base.getIn(['registerModal', 'form', 'email']),
        username: state.base.getIn(['registerModal', 'form', 'username']),
        password: state.base.getIn(['registerModal', 'form', 'password']),
        passwordConfirm: state.base.getIn(['registerModal', 'passwordConfirm']),
        error: state.base.getIn(['registerModal', 'error']),
        form: state.base.getIn(['registerModal', 'form'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(RegisterModalContainer);


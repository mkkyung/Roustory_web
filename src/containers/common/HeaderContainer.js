import React, { Component } from 'react';
import _ from 'lodash';

import Header from '../../components/common/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/modules/base';

import { Link } from 'react-router-dom';

class HeaderContainer extends Component {
  handleLoginClick = async () => {
    const { BaseActions, logged, User_id } = this.props;
    if(logged) {
      try {
        await BaseActions.logout();

        window.location.href = "/";

        // this.props.history.push("/");
        
        // logout(){
        //   localStorage.clear();
        //   console.log("redirect");
        //   return(
        //     <Redirect to="/"></Redirect>
        //   )
        // window.location.reload(); // 페이지 새로고침
      } catch (e) {
      }
      return;
    }
    BaseActions.showModal('login');
    BaseActions.initializeLoginModal();
  }

  render() {
    const { handleLoginClick } = this;
    const { logged, username } = this.props;
    return (
      <Header
        onLoginClick={handleLoginClick}
        logged={logged}
        username={username}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    username: state.base.get('User_id')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);

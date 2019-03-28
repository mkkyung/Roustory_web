import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import RegisterModalContainer from 'containers/modal/RegisterModalContainer';
import Menu from 'components/common/Menu';


const HeaderPage = () => {
  return (
    <div>
      <HeaderContainer/>
      <LoginModalContainer/>
      <RegisterModalContainer/>
      <Menu/>
    </div>
  );
};

export default HeaderPage;

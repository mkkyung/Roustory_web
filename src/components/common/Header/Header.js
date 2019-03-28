import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/style.scss';
import _ from 'lodash';
import { NavLink } from "react-router-dom";


const cx = classNames.bind(styles);

const Header = ({onLoginClick, logged, username }) => {
    const activeStyle = {
        color: "#ff8a01",
        fontSize: "20px"
    };
    console.log(username);
    return (
            <div className={cx('header-login-contain')}>
                <div className={cx('header-contain')}  >
                    <div className={cx('header-contain2')} >
                        <div className={cx('header-title-contain')} >
                            <div className={cx('header-title')} style={{marginRight:'15px', color:'white', marginTop:'15px'}}>
                                {logged ? `${username} 님` : '비회원님'}
                            </div>
                            <div className={cx('header-title')} onClick={onLoginClick} style={{marginRight:'15px', color:'white', marginTop:'15px', cursor:'pointer'}}>
                                {logged ? '로그아웃' : '로그인'}    
                            </div>
                            <NavLink exact to="/mypage">
                                <div className={cx('header-title')} style={{color:'white', marginTop:'15px'}}>
                                    {logged ? '마이페이지' : ''}
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div> 
    )
}

export default Header;
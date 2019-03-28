import React from 'react';
import styles from './Menu.scss';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Menu = () => {
    const activeStyle = {
        color: "#ff8a01",
        fontSize: "20px"
    };

    return(
        <div className={cx('header-menu-contain')} >
        <div className={cx('header-menu-contain2')}  >
            <div className={cx('header-logo-contain')} >
                <div>
                    <div>
                        {/* <span className={cx('header-logo')}>roustory</span> */}
                        <NavLink exact to="/" className={cx('header-logo')}>
                            <div>roustory</div>
                        </NavLink>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', width: '300px' }}>
                        <span className={cx('header-sub-logo')}>walking on the history</span>
                    </div>
                </div>
            </div>
            <div className={cx('header-menu2')}>                    
                <NavLink exact to="/" className={cx('header-contain')} activeClassName={cx('test')}>홈</NavLink>
                <NavLink to="/calendar" className={cx('header-contain')} activeClassName={cx('test')}>일정만들기</NavLink>
                <NavLink to="/besttour" className={cx('header-contain')} activeClassName={cx('test')}>추천여행</NavLink>
                <NavLink to="/review" className={cx('header-contain')} activeClassName={cx('test')}>여행후기</NavLink>            
            </div>

            {/* <NavLink to="/besttour" className={cx('header-menu2')} activeClassName={cx('test')}>
                <div className={cx('header-contain')}>추천여행</div>
            </NavLink>
            <NavLink to="/review" className={cx('header-menu2')} activeClassName={cx('test')}>
                <div className={cx('header-contain')}>여행후기</div>
            </NavLink>
            <NavLink to="/calendar" className={cx('header-menu2')} activeClassName={cx('test')}>
                <div className={cx('header-contain')}>일정만들기</div> 
            </NavLink>
            <NavLink exact to="/" className={cx('header-menu2')}>
                <div className={cx('header-contain')} activeClassName={cx('test')}>홈2</div> 
            </NavLink> */}
        </div>    
    </div>
    );
};

export default Menu;
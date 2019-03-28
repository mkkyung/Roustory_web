import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const MemberContent = ({user_profile, name, password, confirm, email, introduce}) => {
    console.log(user_profile);
    return (
        <div className={cx('contain-bottom-text')}>
            <div className={cx('contain-test')}>
                <div className={cx('contain-bottom-image')}>
                    <div className={cx('contain-bottom-image2')}>
                        <div className={cx('contain-bottom-image3')}>
                            <img src={user_profile} className={cx('image')}/>        
                        </div>
                    </div>
                </div>
                <div className={cx('contain-bottom-name')}>
                    <div className={cx('contain-bottom-name2')}>
                        <div className={cx('contain-bottom-name3')}>
                            <span className={cx('name')}>이름</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-bottom-password')}>
                    <div className={cx('contain-bottom-password2')}>
                        <div className={cx('contain-bottom-password3')}>
                            <span className={cx('password')}>비밀번호</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-bottom-confirm')}>
                    <div className={cx('contain-bottom-confirm2')}>
                        <div className={cx('contain-bottom-confirm3')}>
                            <span className={cx('confirm')}>비밀번호 확인</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-bottom-email')}>
                    <div className={cx('contain-bottom-email2')}>
                        <div className={cx('contain-bottom-email3')}>
                            <span className={cx('email')}>email</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-bottom-introduce')}>
                    <div className={cx('contain-bottom-introduce2')}>
                        <div className={cx('contain-bottom-introduce3')}>
                            <span className={cx('introduce')}>소개</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-blank')}></div>
            </div>
            <div className={cx('contain-border-profile')}>
                <div className={cx('contain-border-profile2')}>
                    <div className={cx('contain-border-profile3')}>
                        <div className={cx('contain-border-profile4')}>
                            <span className={cx('profile')}>프로필 사진 바꾸기</span>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-border-name')}>
                    <div className={cx('contain-border-name2')}>
                        <div className={cx('contain-border-name3')}>
                            <div className={cx('contain-border-name4')}>
                                <input className={cx('name')} type='text' value={name} />  
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-border-password')}>
                    <div className={cx('contain-border-password2')}>
                        <div className={cx('contain-border-password3')}>
                            <div className={cx('contain-border-password4')}>
                                <input className={cx('password')} type='password' />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-border-check')}>
                    <div className={cx('contain-border-check2')}>
                        <div className={cx('contain-border-check3')}>
                            <div className={cx('contain-border-check4')}>
                                <input className={cx('confirm')} type='password' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-border-email')}>
                    <div className={cx('contain-border-email2')}>
                        <div className={cx('contain-border-email3')}>
                            <div className={cx('contain-border-email4')}>
                                <input className={cx('email')} type='email' value={email} />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-border-introduce')}>
                    <div className={cx('contain-border-introduce2')}>
                        <div className={cx('contain-border-introduce3')}>
                            <div className={cx('contain-border-introduce4')}>
                                <input className={cx('introduce')} value={introduce} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-blank')}></div>    
            </div>
        </div>
    )
}

const MemberContentData = ({members}) => {
    console.log(members.toJS());
    const meberlist = members.map (
        (post, i) => {
            const { user_profile, User_nm, User_pwd, User_email, User_intro } = post.toJS();
            return (
                <MemberContent 
                    user_profile = {user_profile}
                    name = {User_nm}
                    password = {User_pwd}
                    confirm = {User_pwd}
                    email = {User_email}
                    introduce = {User_intro}
                    no = {i}
                />
            )
        }
    )

    return (
        <Fragment>
            {meberlist}
        </Fragment>
    )
} 

export default MemberContentData;
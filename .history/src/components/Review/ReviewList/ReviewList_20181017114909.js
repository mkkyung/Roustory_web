import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from './ReviewList.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ReviewItem = ({course_cd, course_nm, write_date, user_cd, user_id, user_profile, review_pic, i}) => {
    return (
        <Link to={`/reviewlist/${course_cd}`}>
        <div style={{ marginRight: i == 7 || i % 4 == 0 || i % 4 == 3 ? '0px' : '66px', marginTop: i > 3 ? '66px' : '0px', marginLeft: i % 4 == 1 ? '66px' : '' }} className={cx('popular-reivew')}>
            <div className={cx('card-header-contain')} >
            {/* card header */}
            <div className={cx('card-header-contain2')} >
                <div className={cx('profile')} >
                <img className={cx('image')} src={user_profile} />
                {/*{require(`${test}`)}*/}
                </div>
                <div className={cx('user-name-contain')} >
                <span className={cx('user-name')}> {user_id} </span>
                </div>
            </div>
            </div>
            {/* card image */}
            <div className={cx('card-image-contain')} >
            <img className={cx('card-image')} src={review_pic} />
            </div>
            {/* card like */}
            <div className={cx('card-like-contain')} >
            <div className={cx('card-like-contain2')} >
                <i className={cx('ion-ios7-heart')}></i>
            </div>
            </div>
            {/* card title */}
            <div className={cx('card-title-contain')} >
            <div className={cx('card-title-contain2')} >
                <span className={cx('card-title')} > {course_nm} </span>
            </div>
            </div>
        </div>
        </Link>
    );
}
    
const ReviewList = ({reviewLists}) => {
    console.log('reviewLists : ' , reviewLists.toJS());
    const reviewList = reviewLists.map(
        (review, i) => {
            const{ course_cd, course_nm, write_date, user_cd, user_id, user_profile, review_pic} = review.toJS();
            return (
                <ReviewItem
                    course_cd={course_cd}
                    course_nm={course_nm}
                    write_date={write_date}
                    user_cd={user_cd}
                    user_id={user_id}
                    review_pic={review_pic}
                    user_profile={user_profile}
                    key={course_cd}
                    id={course_cd}
                    i={i}
                />
            )
        }
    )
    return (
        <div style={{ width: '100%' }}>
            <div className={cx('review-contain')}>
                <div className={cx('review-contain2')}>
                    <div style={{ width: '100%', marginTop: '30px', minHeight: '666px' }}>
                        {reviewList}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ReviewList;
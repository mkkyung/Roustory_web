import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";
import ReviewContentData from "./ReviewContent/ReviewContent";
import ScheduleContent from "./ScheduleContent/ScheduleContent";

const cx = classNames.bind(styles);

const reviewProfile = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QIvEf4BB3yeUt-ymp6vsGZp-hYu8LImN06f65peG4omDozVCCg",
    username: "mk",
    num:0
};


class ReviewDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prettyRoute: 'review',
        };

        this.updatePrettyRoute.bind(this);
        this.isSameRoute.bind(this);
    }

    updatePrettyRoute (route) {
        this.setState({
            prettyRoute: route,
        })
    }

    isSameRoute (uri) {
        return (this.state.prettyRoute === uri) ? `${uri}--is-activate` : '';        
    }

    
    render () {
        const posts = this.props.posts;
        const course = posts.toJS().map(
            (post) => {
                const { course_nm, course_subtitle } = post;
                return(                
                    {course_nm, course_subtitle}          
                );
            }
        );

        //if(course.length === 0) return null;            
        if(course.length === 0){
            course[0] = {course_nm : "후기를 등록해주세요", course_subtitle : "등록된 후기가 없습니다."};
        }

        const RouteReviewContentData = {
            review: <ReviewContentData posts={ posts } />,
            schedule: <ScheduleContent />        
        };

        const Tag = RouteReviewContentData[this.state.prettyRoute];

        return(
            <div className={cx('background')}>
                <div className={cx('center')}>
                    <div className={cx('top-box')}>
                        <div className={cx('review-profile')}>
                            <div className={cx('profile-box')}>
                                <div className={cx('photo-box')}>
                                    <img className={cx('user-photo')} src={reviewProfile.img} alt={'user'} />
                                </div>
                                <div className={cx('name-box')}>
                                <span className={cx('review-profile-username')}>
                                    {reviewProfile.username}님
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('review-title')}>
                            <div className={cx('title-box')}>
                                <div className={cx('main-box')}>
                                <span className={cx('main-title')}>
                                    {course[0].course_nm}
                                </span>
                                </div>
                                <div className={cx('sub-box')}>
                            <span className={cx('sub-title')}>
                                {course[0].course_subtitle}
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-smallbox')}>
                        <div className={cx('small-borderbox')}>
                            <div className={cx('like-box')}>
                                <div className={cx('l-icon-box')}>
                                    <i className={cx('fas fa-heart', 'l-icon')} />
                                </div>
                                <div className={cx('l-text-box')}>
                                <span className={cx('l-text')}>
                                    3개
                                </span>
                                </div>
                            </div>
                            <div className={cx('location-box')}>
                                <div className={cx('lo-icon-box')}>
                                    <i className={cx('fas fa-map-marker-alt', 'lo-icon')} />
                                </div>
                                <div className={cx('lo-text-box')}>
                                <span className={cx('lo-text')}>
                                    서대문형무소
                                </span>
                                </div>
                            </div>
                            <div className={cx('budget-box')}>
                                <div className={cx('b-icon-box')}>
                                    <i className={cx('fas fa-won-sign', 'b-icon')} />
                                </div>
                                <div className={cx('b-text-box')}>
                                <span className={cx('b-text')}>
                                    가계부
                                </span>
                                </div>
                            </div>
                            <div className={cx('save-box')}>
                                <div className={cx('save-borderbox')}>
                                <span className={cx('s-textbox')}>
                                    일정 가져오기
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-selectbox')}>
                        <div className={cx(`review`, `${this.isSameRoute('review')}`)} onClick={ () => this.updatePrettyRoute('review') }>
                            <div className={cx('review-borderbox')} >
                                <div className={cx('r-icon-box')}>
                                    <i className={cx('far fa-comment-dots', 'r-icon')} />
                                </div>
                                <div className={cx('r-text-box')}>
                                <span className={cx('r-text')}>
                                    여행 후기
                                </span>
                                </div>
                            </div> 
                        </div>
                        <div className={ cx('divider') }>
                        </div>
                        <div className={ cx(`schedule`, `${this.isSameRoute('schedule')}`) } onClick={ () => this.updatePrettyRoute('schedule') }>
                            <div className={cx('schedule-borderbox')}>
                                <div className={cx('s-icon-box')}>
                                    <i className={cx('far fa-calendar-alt', 's-icon')} />
                                </div>
                                <div className={cx('s-text-box')}>
                                <span className={cx('s-text')}>
                                    여행 일정표
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        Tag
                    }
                </div>
            </div>
        )
    }
}

export default ReviewDetail;

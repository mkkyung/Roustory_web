import React, { Fragment } from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";

const cx = classNames.bind(styles);

const ReviewContent = ({course_kind, course_cd, course_order, tour_cd, review_pic, review_comment, course_nm, write_date, user_cd, event_cd, tour_nm, tour_traffic_bus, tour_traffic_train, tour_price}) => {
    //console.log(course_kind, course_cd, course_order, tour_cd, review_pic, review_comment, course_nm, write_date, user_cd, event_cd, tour_nm, tour_traffic_bus, tour_traffic_train, tour_price )
    return (
        <div className={cx('content-background')}>
            <div className={cx('content-box')}>
                <div className={cx('heading-title')}>
                    <span className={cx('title')}>
                        {tour_nm}
                    </span>
                </div>
                <div className={cx('img-box')}>
                    <img className={cx('content-img')} src={review_pic} alt={'content-img'} />
                </div>
                <div className={cx('content-detail')}>
                    <div className={cx('content-budget')}>
                        <div className={cx('cb-icon-box')}>
                            <i className={cx('fas fa-won-sign', 'cb-icon')} ></i>
                        </div>
                        <div className={cx('cb-text-box')}>
                            <span className={cx('cb-text')}>
                                {tour_price}
                            </span>
                        </div>
                    </div>
                    <div className={cx('content-bus')}>
                        <div className={cx('bus-icon-box')}>
                            <i className={cx('fas fa-bus', 'bus-icon')} ></i>
                        </div>
                        <div className={cx('bus-text-box')}>
                            <span className={cx('bus-text')}>
                                {tour_traffic_bus}
                            </span>
                        </div>
                    </div>
                    <div className={cx('content-subway')}>
                        <div className={cx('subway-icon-box')}>
                            <i className={cx('fas fa-subway', 'subway-icon')} ></i>
                        </div>
                        <div className={cx('subway-text-box')}>
                            <span className={cx('subway-text')}>
                                {tour_traffic_train}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('content-textbox')}>
                    <div className={cx('text-box')}>
                        <span className={cx('text')}>
                            {review_comment}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReviewContentData = ({posts}) => {
    const list = posts.map(
        (post) => {
            const{ course_kind, course_cd, course_order, tour_cd, review_pic, review_comment, course_nm, write_date, user_cd, event_cd, tour_nm, tour_traffic_bus, tour_traffic_train, tour_price } = post.toJS();
            return <ReviewContent
            course_kind={course_kind}
            course_cd={course_cd}
            course_order={course_order}
            tour_cd={tour_cd}
            review_pic={review_pic}
            review_comment={review_comment}
            course_nm={course_nm}
            write_date={write_date}
            user_cd={user_cd}
            event_cd={event_cd}
            tour_nm={tour_nm}
            tour_traffic_bus={tour_traffic_bus}
            tour_traffic_train={tour_traffic_train}
            tour_price={tour_price}
            />
        });

    return(
        <Fragment>
            {list}
        </Fragment>
    );
};

export default ReviewContentData;
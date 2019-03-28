import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/style.scss';
import _ from 'lodash';

const cx = classNames.bind(styles);

const RecommendCourse = ({ onCategory, onToggle, onSlide, onSlideInit }) => {
    const categorys = onCategory.toJS()
    return (
        <div className={cx('course-recommend-contain')} >
            <div style={{ width: '100%' }} >
                <div className={cx('course-recommend-contain2')} >
                    <div className={cx('course-title-contain')} >
                        <div className={cx('title-contain')} >
                            <span className={cx('title')} > 인기 게시글 </span>
                        </div>
                        <div className={cx('course-category-contain')} >
                            {/* category */}
                            <div className={cx('course-category-contain2')} >
                                {
                                    categorys.map((recommend, i) => {
                                        return (
                                            <div key={i}>
                                                <span style={{ color: recommend.selected ? "#ff8a01" : "white", marginLeft: i == 0 ? '0px' : '30px' }} className={cx('category')}
                                                    onClick={() => {
                                                        onToggle(i)
                                                    }}>
                                                    {recommend.text}
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className={cx('course-card-contain')} >
                        <div className={cx('course-card-contain2')} style={{ width: 'calc(100% - 120px)' }} >
                            <div style={{left:'50%', transform:'translate(-50%,0)'}} >
                                {
                                    categorys.map((recommend, index) => {
                                        if (recommend.selected && recommend.content.length - recommend.slideNum < 0 || recommend.slideNum < 0) {
                                            onSlideInit(0)
                                        }
                                        return (
                                            recommend.selected ?
                                                recommend.content.slice(recommend.slideNum, recommend.slideNum + 4).map((data, i) => {
                                                    return (
                                                        <div style={{ marginLeft: i == 0 ? '0px' : '60px' }} className={cx('course-card-contain3')} key={i} >
                                                            {/* image */}
                                                            <div className={cx('course-card-image')} >
                                                                <img className={cx('image')} src={data.image} />
                                                            </div>
                                                            {/* hash */}
                                                            <div className={cx('course-card-hash')} >
                                                                <div className={cx('course-card-hash-contain')} >
                                                                    <span className={cx('hash')} >
                                                                        {data.hash}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                null
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* button */}
                        <div className={cx('course-button-contain')} >
                            <div className={cx('course-button-contain2')} >
                                <div className={cx('course-button')} onClick={() => { onSlide(-4) }}>
                                    <div className={cx('course-icon-contain')} >
                                        <i style={{ color: 'white' }} className={cx('ion-ios7-arrow-left', 'course-icon')} ></i>
                                    </div>
                                </div>
                                <div className={cx('course-button')} style={{ marginLeft: '30px' }} onClick={() => { onSlide(4) }} >
                                    <div className={cx('course-icon-contain')} >
                                        <i style={{ color: 'white' }} className={cx('ion-ios7-arrow-right', 'course-icon')}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendCourse

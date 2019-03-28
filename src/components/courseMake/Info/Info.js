import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from './Info.scss';
import _ from 'lodash';


const cx = classNames.bind(styles);



const Info = ({ onCourseData, onMapToggle, index, onSelectItem }) => {
    const courseData = onCourseData.toJS()
    return (
        <div className={cx('info-contain')}>
            {courseData.map((course, num) => {
                if(num == index){
                    console.log(course)
                }
                return (
                    course.Selected && course.Course_selected && num == index
                        ?
                        <Fragment key={num}>
                            <div className={cx('info-header')}>
                                <div>
                                    <span style={{fontSize:'18px', color:'white', marginLeft:'30px', lineHeight:'60px', fontWeight:'bold'}} >
                                        {course.Tour_nm}
                                    </span>
                                </div>
                                <div className={cx('info-body-contain')}  >
                                    <div className={cx('info-body')} >
                                        <div className={cx('info-image-contain')} >
                                            <div className={cx('info-image')} style={{width:'100%'}} >
                                                <img src={course.Tour_img} style={{ width: '100%', height: '100%', boxShadow:'2px 2px 2px #aaaaaa' }} />
                                            </div>
                                        </div>
                                        <div className={cx('info-title')} >
                                            <span className={cx('title')} >
                                                관광지 정보
                                            </span>
                                        </div>
                                        <div className={cx('info-title-text')} >
                                            <span className={cx('text')} >
                                                {/* {course.서대문형무소 역사관 입니다.} */}
                                            </span>
                                        </div>
                                        <div className={cx('info-content-title')} >
                                            <span className={cx('text')} >
                                                개장시간 : {course.Tour_open}, 마감시간 : {course.Tour_close}
                                            </span>
                                            <span className={cx('text')} >
                                                요금안내 : {course.Tour_price}
                                            </span>
                                            <span className={cx('text')} >
                                                할인정보 : {course.Tour_sale}
                                            </span>
                                            <span className={cx('text')} >
                                                교통정보 : {course.Tour_traffic_bus}
                                                <br></br>
                                                교통정보: {course.Tour_traffic_train}
                                            </span>
                                            <span className={cx('text')} >
                                                주소 : {course.Tour_addr}
                                            </span>
                                            <span className={cx('text')} >
                                                전화번호 : {course.Tour_tel1}, {course.Tour_tel2} 
                                            </span>
                                        </div>
                                        <div className={cx('info-content')} >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                        :
                    null
                )
            })}
        </div>
    )
}

export default Info
import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from './Basket.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);



const Basket = ({ onCourseData, index, onMapToggle, onSelectItem }) => {
    const courseData = onCourseData.toJS()
    // console.log(courseData)
    return (
        <div className={cx('basket-contain')} >
            <div className={cx('basket-contain2')} >
                <div className={cx('basket-title-contain')} >
                    <div className={cx('icon-contain')} >
                        <i className={cx('ion-ios7-location')} style={{ fontSize: '30px', lineHeight: '30px', color: '#ff8a01' }} ></i>
                    </div>
                    <div>
                        <span className={cx('title')} >
                            6.25
                        </span>
                    </div>
                    <div style={{ marginLeft: '15px' }} >
                        <span style={{ fontSize: '18px', lineHeight: '47px', color: 'white' }} >
                            여행 장바구니
                        </span>
                    </div>
                </div>
                {courseData.map((course, num) => {
                    return (
                        course.Selected 
                            ?
                            <Fragment key={num}>
                                <div className={cx('basket-item')} onClick={() => {
                                    onSelectItem(index, num)
                                }} >
                                    <div className={cx('basket-image')} >
                                        <img src={course.Tour_img} style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    <div className={cx('basket-close-conain')} >
                                        <i className={cx('ion-close')} style={{ float: "right", fontSize: '15px', lineHeight: '15px', color: '#aaaaaa', cursor: 'pointer' }}
                                            onClick={() => {
                                                onMapToggle(num)
                                            }}
                                        >
                                        </i>
                                    </div>
                                    <div className={cx('basket-info-conatin')} >
                                        <div className={cx('info-index-contain')} >
                                            <span className={cx('index')} >
                                                {num}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ marginLeft: '9px', fontSize: '18px', color: '#5a5a5a' }}>
                                                {course.Tour_nm}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                            :
                            null
                    )
                })}
            </div>
            <Link to='/mypage' >
                <div style={{width:'calc(100% - 30px)', transform:'translate(5%,0)' , height:'45px', backgroundColor:'#ff8a01', position:'absolute', float:'none', bottom:'15px', left:'0px'}} >
                    <span style={{width:'100%', fontSize:'18px', lineHeight:'45px' , color:'white', fontWeight:'bold', textAlign:'center'}} >
                        저장
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Basket
import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/style.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);



const Cover = ({ onCategory, onToggle }) => {
    const categorys = onCategory.toJS()
    return (
        <div className={cx('home-cover-contain')} >
            <div className={cx('home-cover-contain2')} >
                <div style={{ width: '100%' }} >
                    {
                        categorys.map((course, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className={cx('cover-category')}>
                                        <span style={{ color: course.selected ? "#ff8a01" : "white", marginLeft: index == 0 ? '0px' : '30px' }} className={cx('category')}
                                            onClick={() => {
                                                onToggle(index)
                                            }} >
                                            {course.text}
                                        </span>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
                <div className={cx('cover-content-contain')} >
                    {
                        categorys.map((course, index) => {
                            return (
                                course.content.map((data, i) => {
                                    return (
                                        course.selected ?
                                            <Fragment key={i}>
                                                <span className={cx('cover-content')} > {data.text}  </span>
                                            </Fragment>
                                            :
                                            null
                                    )
                                })
                            )
                        })

                    }
                </div>
                <Link to="/calendar">
                    <div className={cx('cover-button')} >
                        <span className={cx('button-text')} >일정짜기</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Cover
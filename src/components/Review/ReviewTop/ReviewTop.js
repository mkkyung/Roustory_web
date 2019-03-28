import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from './ReviewTop.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const f_selected = (e, f_order) => {
    for(let i = 0; i < document.getElementsByName('eventitem').length; i++){
        document.getElementsByName('eventitem')[i].selected = true;
        document.getElementsByName('eventitem')[i].className = cx('review-category_non_active');
    }
    e.target.selected = false;
    e.target.className = cx('review-category_active');

    f_order();
}

const EventItem = ({Event_cd, Event_nm, onSubmit}) => {
    return (
        <Fragment>
             <div /*onClick={() => onSubmit(Event_cd)}*/>
                <span style={{marginRight:"15px"}} className={cx('review-category_non_active')} onClick={(e) => f_selected(e, () => onSubmit(Event_cd))} selected={true} name="eventitem">
                    {Event_nm}
                </span>
            </div>
        </Fragment>
    );
}
    
const ReviewTop = ({eventLists, onSubmit}) => {
    const eventList = eventLists.map(
        (event) => {
            const{ Event_cd, Event_nm } = event.toJS();
            return (
                <EventItem
                    Event_cd={Event_cd}
                    Event_nm={Event_nm}
                    key={Event_cd}
                    id={Event_cd}
                    onSubmit={onSubmit}
                />
            )
        }
    )
    return (
        <div style={{ width: '100%' }}>
            <div className={cx('review-contain')}>
                <div className={cx('review-contain2')}>
                    <span className={cx('review-title')}> 여행후기 </span>
                    <div className={cx('review-category-contain')}>
                        <div>
                            <span style={{marginRight:"15px"}} className={cx('review-category_active')} onClick={(e) => f_selected(e, () => onSubmit('all'))} selected={false} name="eventitem">
                                전체보기
                            </span>
                        </div>
                        {eventList}
                        <div className={cx('review-category-option-contain')}>
                            <select className={cx('review-category-select')}>
                                <option className={cx('review-category-option')}>추천수</option>
                                <option className={cx('review-category-option')}>최신순</option>
                                <option className={cx('review-category-option')}>이름순</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ReviewTop;
import React from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";




const cx = classNames.bind(styles);

const content = {
    img: "https://source.unsplash.com/900x450/?person",
    location: "국립중앙박물관",
    text: 'hdflahsldfhasldfhasldfhlasdhflashdflashdfasldfhalskdfhlashdflashdflashdflhaskldfdhalsdfgasjdh;lfasdlhfasjhdf가나다라마바사아자차카타파하가나다라마바사아자차카타파가나다라마바사아자차카타파하가나다라마바사아자차카타파가나다라마바사아자차카타파하가나다라마바사아자차카타파가나다라마바사아자차카타파하가나다라마바사아자차카타파'
}




const ScheduleContent = () => (
    <div className={cx('content-background')}>                        
        <div className={cx('content-box')}>
            <div className={cx('heading-title')}>
                <span className={cx('title')}>
                    {content.location}
                </span>
            </div>
            <div className={cx('img-box')}>
                <img className={cx('content-img')} src={content.img} alt={'content-img'} />
            </div>
            <div className={cx('content-detail')}>
                <div className={cx('content-budget')}>
                    <div className={cx('cb-icon-box')}>
                        <i className={cx('fas fa-won-sign', 'cb-icon')} ></i>
                    </div>
                    <div className={cx('cb-text-box')}>
                        <span className={cx('cb-text')}>
                            가계부
                        </span>
                    </div>
                </div>
                <div className={cx('content-bus')}>
                    <div className={cx('bus-icon-box')}>
                        <i className={cx('fas fa-bus', 'bus-icon')} ></i>
                    </div>
                    <div className={cx('bus-text-box')}>
                        <span className={cx('bus-text')}>
                            420, 1220
                        </span>
                    </div>
                </div>
                <div className={cx('content-subway')}>
                    <div className={cx('subway-icon-box')}>
                        <i className={cx('fas fa-subway', 'subway-icon')} ></i>
                    </div>
                    <div className={cx('subway-text-box')}>
                        <span className={cx('subway-text')}>
                            동대문역
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('content-textbox')}>
                <div className={cx('text-box')}>
                    <span className={cx('text')}>
                        {content.text}
                    </span>
                </div>
            </div>
        </div>
    </div>    
);

export default ScheduleContent;
import React, {Fragment} from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const RecommendContent = ({course_cd, title, img, no}) => { 
    return (
        <Link to={`/reviewlist/${course_cd}`}>
            <div style={{ marginRight: no === 7 || no % 4 === 0 || no % 4 === 3 ? '0px' : '66px', marginLeft: no % 4 === 1 ? '66px' : '' }} className={cx('content-box-border')}>
                <div className={cx('title-box')}>
                    <span className={cx('content-title')}>
                        {title}
                    </span>
                </div>
                <div className={cx('content-main')}>
                    <img className={cx('cover-img')} src={img} alt={'cover-img'} style={{width: '250px', height: '240px'} } />
                </div>
                <div className={cx('like-box')}>
                    <div className={cx('border-box')}>
                        <div className={cx('like-icon-box')}>
                            <i className={cx("fas fa-heart", 'like-icon')}></i>
                        </div>
                        <div className={cx('like-count-box')}>
                            <span className={cx('like-count')}>
                                0개
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}



const RecommendContentData = ({posts, id}) => {
    console.log(posts);
    let index = 0;
    const recommendContentData = posts.map(
        (post) => {
            const{ course_cd, course_nm, img, event_cd } = post.toJS();
            if(id == 'E000' || id == event_cd)          
            return(
                <RecommendContent
                img={img}
                title={course_nm}
                no={index++}
                course_cd={course_cd}                   
                />                
            )
        }
    )
    return (
        <Fragment>
            {recommendContentData}            
        </Fragment>
    )
}


export default  RecommendContentData;
import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
import Pagination from "components/Pagination";
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const ScheduleContent = ({img, no, user_id, title, user_profile, course_cd}) => {
    // console.log('aaaaa :  ' , user_profile);
    return (
        <Link to={`/reviewlist/3/${course_cd}`}>
            <div className={cx('test')}>
                <div style={{ marginRight: no == 7 || no % 4 == 0 || no % 4 == 3 ? '0px' : '66px', marginLeft: no % 4 == 1 ? '66px' : '' }} className={cx('schedule-box-border')}>
                    <div className={cx('schedule-box')}>
                        <div className={cx('user-box')}>
                            <div className={cx('user-info')}>
                                <img src={user_profile} className={cx('user-img')} />
                            </div>
                            <div className={cx('user-name')}>
                                <span className={cx('user-name2')}>
                                    {user_id}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('titile-img')}>
                        <img className={cx('img-file')} src={img} alt={'img-file'}/>
                    </div>
                    <div className={cx('title-box')}>
                        <div className={cx('content-text')}>
                            <div className={cx('content-title')}>
                                <i className={cx("fas fa-heart", 'like-icon')}> </i>
                            </div>
                            <div className={cx('content-title')}>
                                <span className={cx('content-card')} > {title} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
const ScheduleContentData = ({posts, id}) => {
    const list = posts.map(
        (post, i) => {
            // console.log(post.toJS())
            const{ course_nm, img, user_id, User_profile, course_cd, event_cd} = post.toJS();
            // console.log('cccccc' , img);
            if(id == 'E000' || id == event_cd) 
            return(
                <ScheduleContent
                    course_cd={course_cd}
                    user_profile={User_profile}
                    img={img}
                    title={course_nm}
                    user_id={user_id}
                    no={i}                    
                />                
            )
        }
    )
    return (
        <Fragment>
            <div className={cx('Schedule-list')}>
                {list}
            </div>
          {/*   <div className={cx('paging-box')}>
            <Pagination />
            </div>     */}        
        </Fragment>
    ) 
}  
 
export default ScheduleContentData;
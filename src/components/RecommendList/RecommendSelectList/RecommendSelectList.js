import React, {Fragment} from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";

const cx = classNames.bind(styles);


const RecommendSelectList = ({title, id, selecting}) => {
    return(
        <Fragment>
            <div>
                <span className={cx('select-list')} onClick={() => selecting(id)}>                    
                    {title}
                </span>
            </div>
        </Fragment>
    )
}

const RecommendListTitle = ({titles, selecting}) => {
    const List = titles.map(
        (titles) => {
            const{ event_cd, event_nm } = titles.toJS();
            return(                
                <RecommendSelectList
                title = {event_nm}
                id = {event_cd}
                selecting = {selecting}
                />
            )
        }
    )
    return (
        <Fragment>
            {List}
        </Fragment>
    )
}

export default RecommendListTitle;
import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = ({no, title, regDate}) => {
    console.log('상세 : ', no, ' ', title, ' ',regDate);
    return (
        <div className={cx('post-item')}>
            <h2>{title}</h2>
            <div className={cx('date')}>{regDate}</div>
            <p>내용</p>
            <div className={cx('tags')}>
                <a>{no}</a>
            </div>
        </div>
    );
}
const PostList = ({posts}) => {
    console.log('posts : ', posts);
    const postList = posts.map(
        (post) => {
            const{ no, title, reg_date} = post.toJS();
            console.log(no, title, reg_date);
            return (
                <PostItem
                    no={no}
                    title={title}
                    regDate={reg_date}
                    key={no}
                    id={no}
                />
            )
        }
    )
    return (
        <div className={cx('post-list')}>
            {postList}
        </div>
    );
};

export default PostList;
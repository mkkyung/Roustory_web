import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/style.scss';
import _ from 'lodash';


const cx = classNames.bind(styles);

const PopularCard = ({ onCategory, onToggle, onLike }) => {
    const categorys = onCategory.toJS()
    return (
        <div className={cx('review-contain')} >
            <div className={cx('review-contain2')} >
                <span className={cx('review-title')} > 추천여행 </span>
                <div className={cx('review-category-contain')} >
                    {
                        categorys.map((review, index) => {
                            return (
                                <div key={index} >
                                    <span style={{ color: review.selected ? "#ff8a01" : "#5a5a5a", marginRight: index == categorys.length - 1 ? '0px' : '30px' }} className={cx('review-category')}
                                        onClick={() => {
                                            onToggle(index)
                                        }}>
                                        {review.text}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ width: '100%', marginTop: '30px', minHeight: '666px' }} >
                    {
                        categorys.map((review, index) => {
                            return (
                                review.content.sort(function (a, b) { return (a.like - b.like) * -1 }).slice(0, 8).map((data, i) => {
                                    return (
                                        review.selected ?
                                            <div style={{ marginRight: i == 7 || i % 4 == 0 || i % 4 == 3 ? '0px' : '66px', marginTop: i > 3 ? '66px' : '0px', marginLeft: i % 4 == 1 ? '66px' : '' }} className={cx('popular-reivew')} key={i} >
                                                <div className={cx('card-header-contain')} >
                                                    {/* card header */}
                                                    <div className={cx('card-header-contain2')} >
                                                        <div className={cx('profile')} >
                                                            <img className={cx('image')} src='https://source.unsplash.com/15x15/?person' />
                                                        </div>
                                                        <div className={cx('user-name-contain')} >
                                                            <span className={cx('user-name')} > {data.user} </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* card image */}
                                                <div className={cx('card-image-contain')} >
                                                    <img className={cx('card-image')} src={data.image} />
                                                </div>
                                                {/* card like */}
                                                <div className={cx('card-like-contain')} >
                                                    <div className={cx('card-like-contain2')} >
                                                        <i className={data.isLike ? cx('ion-ios7-heart') : cx('ion-ios7-heart-outline')} style={{ color: data.isLike ? "#ED4956" : "#5a5a5a", cursor: data.isLike ? 'pointer' : 'pointer' }}
                                                            onClick={() => {
                                                                data.isLike = !data.isLike
                                                                let isLike = data.isLike
                                                                let first_index = index
                                                                let second_index = i
                                                                onLike(first_index, second_index, isLike)
                                                            }}>
                                                        </i>
                                                    </div>
                                                </div>
                                                {/* card title */}
                                                <div className={cx('card-title-contain')} >
                                                    <div className={cx('card-title-contain2')} >
                                                        <span className={cx('card-title')} > {data.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default PopularCard

// export default class PopularCard extends Component {
//     // showReview = () => {
//     //     return (

//     //         )
//     //       })
//     //     )
//     //   }

//     //   showPopularReview = () => {
//     //     return (
//     //       
//     //     )
//     //   }
//     render() {
//         return (
//             <div className={cx('review-contain')} >
//                 <div className={cx('review-contain2')} >
//                     <span className={cx('review-title')} > 인기 게시글 </span>
//                     <div className={cx('review-category-contain')} >
//                         {/* {this.showReview()} */}
//                     </div>
//                     <div style={{ width: '100%', marginTop: '30px', minHeight: '666px' }} >
//                         {/* {this.showPopularReview()} */}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

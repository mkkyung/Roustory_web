import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from 'styles/style.scss';
// import { WSASYSCALLFAILURE } from 'constants';
import update from 'react-addons-update'
import _ from 'lodash';
// import Radium, {StyleRoot} from 'radium';
// import { StyleRoot } from 'radium';
// import Radium from 'radium';


const cx = classNames.bind(styles);

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coursData: [
        {
          tag: 'course',
          text: '6.25전쟁',
          selected: true,
          content: [
            { title: '', text: '6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다.' }
          ]
        },
        {
          tag: 'course',
          text: '4.3사건',
          selected: false,
          content: [
            { title: '', text: 'd' }
          ]
        },
        {
          tag: 'course',
          text: '일제강점기',
          selected: false,
          content: [
            { title: '', text: 'a' }
          ]
        }
      ],
      reviewData: [
        {
          tag: 'review',
          text: '전체보기',
          selected: true,
          content: [
            { user: 'test1', image: 'https://source.unsplash.com/250x300/?peach', title: '6.25', like: 1, isLike: false },
            { user: 'test2', image: 'https://source.unsplash.com/250x300/?banana', title: '일제 강점기', like: 2, isLike: false },
            { user: 'test3', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 3, isLike: false },
            { user: 'RouStory', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 14, isLike: false },
            { user: 'test5', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 5, isLike: false },
            { user: 'test6', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 6, isLike: false },
            { user: 'test7', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 7, isLike: false },
            { user: 'test8', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 8, isLike: false },
            { user: 'test9', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 9, isLike: false },
            { user: 'test10', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 10, isLike: false }
          ]
        },
        {
          tag: 'review',
          text: '6.25전쟁',
          selected: false,
          content: [
            { user: 'test1', image: 'https://source.unsplash.com/250x161/?peach', title: '6.25', like: 1, isLike: false }
          ]
        },
        {
          tag: 'review',
          text: '일제강점기',
          selected: false,
          content: [
            { user: 'test2', image: 'https://source.unsplash.com/250x161/?banana', title: '일제 강점기', like: 1, isLike: false }
          ]
        },
        {
          tag: 'review',
          text: '4.3사건',
          selected: false,
          content: [
            { user: 'test3', image: 'https://source.unsplash.com/250x161/?watermelon', title: '4.3', like: 1, isLike: false }
          ]
        },
      ],
      recommendData: [
        {
          tag: 'recommend',
          text: '전체보기',
          selected: true,
          slideNum: 0,
          content: [
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
          ]
        },
        {
          tag: 'recommend',
          text: '6.25전쟁',
          selected: false,
          slideNum: 0,
          content: [
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
          ]
        },
        {
          tag: 'recommend',
          text: '4.3사건',
          selected: false,
          slideNum: 0,
          content: [
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
          ]
        },
        {
          tag: 'recommend',
          text: '일제강점기',
          selected: false,
          slideNum: 0,
          content: [
            { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
          ]
        },
      ]
    }
  }

  //getDerivedStateFromProps -> props로 받아온 값을 state로 동기화 시키는 용도 
  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log(nextProps.slideNum)
  //   console.log(prevState.slideNum)
  //   return null;
  // }

  // componentDidUpdate(a,b,c){
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)
  // }

  // showRecommentList = null;


  componentDidMount() {
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   console.log(this.state.slideNum)

  //   // if(_.forEach(nextState.recommendData, function(data){data.selected})){
  //   //   this.setState({slideNum:0})
  //   // }
  //   return true
  // }

  // getSnapshotBeforeUpdate(a,b){
  //   console.log(a)
  //   console.log(b)
  // }

  //function

  showCover = () => {
    return (
      this.state.coursData.map((course, i) => {
        return (
          <Fragment key={i}>
            <div className={cx('cover-category')}>
              <span style={{ color: course.selected ? "#ff8a01" : "white", marginLeft: i == 0 ? '0px' : '30px' }} className={cx('category')}
                onClick={() => {
                  _.forEach(this.state.coursData, function (data, data_index) {
                    // 중복 클릭시 selected 값 고정
                    if (data_index == i && course.selected == data.selected) {
                      data.selected = true;
                    }
                    // 특정 span 클릭시 나머지 span false값으로 고정
                    if (!(data_index == i)) {
                      data.selected = false;
                    }
                  })
                  this.setState({
                    course: update(
                      this.state.coursData,
                      {
                        [i]: {
                          selected: { $set: !course.selected }
                        }
                      }
                    )
                  })
                }}>
                {course.text}
              </span>
            </div>
          </Fragment>
        )
      })
    )
  }

  showCoverContent = () => {
    return (
      this.state.coursData.map((course, index) => {
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
    )
  }

  showReview = () => {
    return (
      this.state.reviewData.map((review, i) => {
        return (
          <div key={i} >
            <span style={{ color: review.selected ? "#ff8a01" : "#5a5a5a", marginRight: i == this.state.reviewData.length - 1 ? '0px' : '30px' }} className={cx('review-category')}
              onClick={() => {
                _.forEach(this.state.reviewData, function (data, data_index) {
                  // 중복 클릭시 selected 값 고정
                  if (data_index == i && review.selected == data.selected) {
                    data.selected = true;
                  }
                  // 특정 span 클릭시 나머지 span false값으로 고정
                  if (!(data_index == i)) {
                    data.selected = false;
                  }
                })
                this.setState({
                  review: update(
                    this.state.reviewData,
                    {
                      [i]: {
                        selected: { $set: !review.selected }
                      }
                    }
                  )
                })
              }}>
              {review.text}
            </span>
          </div>
        )
      })
    )
  }

  showPopularReview = () => {
    return (
      this.state.reviewData.map((review, index) => {
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
                          this.setState({
                            data: update(
                              this.state.reviewData[index].content[i],
                              {
                                isLike: { $set: data.isLike }
                              }
                            )
                          })
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
    )
  }

  showRecommend = () => {
    return (
      this.state.recommendData.map((recommend, i) => {
        return (
          <div key={i}>
            <span style={{ color: recommend.selected ? "#ff8a01" : "white", marginLeft: i == 0 ? '0px' : '30px' }} className={cx('category')}
              onClick={() => {
                _.forEach(this.state.recommendData, function (data, data_index) {
                  // 중복 클릭시 selected 값 고정
                  if (data_index == i && recommend.selected == data.selected) {
                    data.selected = true;
                  }
                  // 특정 span 클릭시 나머지 span false값으로 고정
                  if (!(data_index == i)) {
                    data.selected = false;
                  }
                })
                this.setState({
                  recommend: update(
                    this.state.recommendData,
                    {
                      [i]: {
                        selected: { $set: !recommend.selected }
                      }
                    }
                  )
                })
              }}>
              {recommend.text}
            </span>
          </div>
        )
      })
    )
  }

  showRecommendCourse = () => {
    return (
      this.state.recommendData.map((recommend, index) => {
        return (
          recommend.selected ?
            recommend.content.slice(recommend.slideNum, recommend.slideNum + 6).map((data, i) => {
              return (
                <div style={{ marginLeft: i == 0 ? '0px' : '60px' }} className={cx('course-card-contain3')} key={i} >
                  {/* image */}
                  <div className={cx('course-card-image')} >
                    <img className={cx('image')} src={data.image} />
                  </div>
                  {/* hash */}
                  <div className={cx('course-card-hash')} >
                    <div className={cx('course-card-hash-contain')} >
                      <span className={cx('hash')} >
                        {data.hash}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
            :
            null
        )
      })
    )
  }

  nextBtn = () => {
    this.state.recommendData.forEach((recommend, i) => {
      if (recommend.selected) {
        let increase = this.state.recommendData[i].slideNum + 6
        if ((recommend.content.length - increase) < 0) {
          recommend.slideNum = 0
          this.setState({
            recommend: update(
              this.state.recommendData,
              {
                [i]: {
                  slideNum: { $set: recommend.slideNum }
                }
              }
            )
          })
        } else {
          recommend.slideNum = increase
          this.setState({
            recommend: update(
              this.state.recommendData,
              {
                [i]: {
                  slideNum: { $set: increase }
                }
              }
            )
          })
        }
      }
    })
  }

  prevBtn = () => {
    this.state.recommendData.forEach((recommend, i) => {
      if (recommend.selected) {
        let decrease = this.state.recommendData[i].slideNum - 6
        if (decrease < 0) {
          recommend.slideNum = 0
          this.setState({
            recommend: update(
              this.state.recommendData,
              {
                [i]: {
                  slideNum: { $set: recommend.slideNum }
                }
              }
            )
          })
        } else {
          recommend.slideNum = decrease
          this.setState({
            recommend: update(
              this.state.recommendData,
              {
                [i]: {
                  slideNum: { $set: decrease }
                }
              }
            )
          })
        }
      }
    })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        {/* cover */}
        <div className={cx('home-cover-contain')} >
          <div className={cx('home-cover-contain2')} >
            <div style={{ width: '100%' }} >
              {this.showCover()}
            </div>
            <div className={cx('cover-content-contain')} >
              {this.showCoverContent()}
            </div>
            <div className={cx('cover-button')} >
              <span className={cx('button-text')} >일정짜기</span>
            </div>
          </div>
        </div>
        {/* popular review */}
        <div className={cx('review-contain')} >
          <div className={cx('review-contain2')} >
            <span className={cx('review-title')} > 인기 게시글 </span>
            <div className={cx('review-category-contain')} >
              {this.showReview()}
            </div>
            <div style={{ width: '100%', marginTop: '30px', minHeight: '666px' }} >
              {this.showPopularReview()}
            </div>
          </div>
        </div>
        {/* recommend course */}
        <div className={cx('course-recommend-contain')} >
          <div style={{ width: '100%' }} >
            <div className={cx('course-recommend-contain2')} >
              <div className={cx('course-title-contain')} >
                <div className={cx('title-contain')} >
                  <span className={cx('title')} > 추천 여행 </span>
                </div>
                <div className={cx('course-category-contain')} >
                  {/* category */}
                  <div className={cx('course-category-contain2')} >
                    {this.showRecommend()}
                  </div>
                </div>
              </div>
              {/* card */}
              <div className={cx('course-card-contain')} >
                <div className={cx('course-card-contain2')} >
                  {this.showRecommendCourse()}
                </div>
                {/* button */}
                <div className={cx('course-button-contain')} >
                  <div className={cx('course-button-contain2')} >
                    <div className={cx('course-button')} onClick={() => { this.prevBtn() }}>
                      <div className={cx('course-icon-contain')} >
                        <i style={{ color: 'white' }} className={cx('ion-ios7-arrow-left', 'course-icon')} ></i>
                      </div>
                    </div>
                    <div className={cx('course-button')} style={{ marginLeft: '30px' }} onClick={() => { this.nextBtn() }} >
                      <div className={cx('course-icon-contain')} >
                        <i style={{ color: 'white' }} className={cx('ion-ios7-arrow-right', 'course-icon')}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

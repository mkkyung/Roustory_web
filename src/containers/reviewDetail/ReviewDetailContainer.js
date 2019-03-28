import React, {Component, Fragment} from 'react';
import ReviewDetail from 'components/ReviewDetail';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewDetailActions from 'store/modules/reviewDetail';

class ReviewDetailContainer extends Component {
    getReviewContentData = () => {
        const {course_cd, reviewDetailActions } = this.props;
        //console.log('course_cd : ', course_cd)
        reviewDetailActions.getReviewContentData({course_cd});
    }

    componentDidMount() {        
        this.getReviewContentData();
    }

    render() {
        const { posts } = this.props;
        return (
            <Fragment>
                <ReviewDetail posts={posts}/>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        posts: state.reviewDetail.get('posts'),
        loading:state.pender.pending['reviewDetail/GET_REVIEW_LIST']
    }),
    (dispatch) => ({
        reviewDetailActions : bindActionCreators(reviewDetailActions, dispatch)
    })
)(ReviewDetailContainer)

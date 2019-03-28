import React, {Component, Fragment} from 'react';
import RecommendList from 'components/RecommendList';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recommendActions from 'store/modules/recommend';

class RecommendContainer extends Component {
    getRecommendContentData = () => {
        const { title, img, event_cd, recommendActions } = this.props;
        recommendActions.getRecommendContentData({
            title, img, event_cd
        });
    }

    getRecommendListTitle = () => {
        const { event_cd, event_nm, recommendActions } = this.props;
        recommendActions.getRecommendListTitle({
            event_cd, event_nm
        });
    }

    componentDidMount() {        
        this.getRecommendContentData();
        this.getRecommendListTitle();
    }

    render() {
        const {  posts, titles } = this.props;
        
        return (
            <Fragment>
                <RecommendList posts={posts} titles={titles} />
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        posts: state.recommend.get('posts'),
        titles: state.recommend.get('titles')
    }),
    (dispatch) => ({
        recommendActions : bindActionCreators(recommendActions, dispatch)
    })
)(RecommendContainer)

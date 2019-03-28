import React, { Component, Fragment } from 'react';
import ScheduleContentData from 'components/MyPage/Modify/SchedulePage/ScheduleContentData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from 'store/modules/schedule';

class ScheduleContainer extends Component {
    
    getScheduleContentData = () => {
        const { title, img, user_id, user_profile, course_cd, ScheduleActions } = this.props;
        ScheduleActions.getScheduleContentData ({
            title, img, user_id, user_profile, course_cd
        })
    }

    getScheduleListTitle = () => {
        const { event_cd, event_nm, ScheduleActions } = this.props;
        ScheduleActions.getScheduleListTitle ({
            event_cd, event_nm
        })
    }

    componentDidMount() {
        this.getScheduleContentData();
        this.getScheduleListTitle();
    }

    render() {
        const { loading, posts, titles } = this.props;
        if(loading) return null;
        return (
            <Fragment>
                <ScheduleContentData posts={posts} titles={titles} />
            </Fragment>
        )
    }
}

export default connect (
    (state) => ({
        posts: state.schedule.get('posts'),
        titles: state.schedule.get('titles'),
        loading: state.pender.pending['schedule/GET_SCHEDULE_LIST']
    }),
    (dispatch) => ({
        ScheduleActions: bindActionCreators(scheduleActions, dispatch)
    })
)(ScheduleContainer)
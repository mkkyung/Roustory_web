import React, { Component, Fragment } from 'react';
import MemberContentData from 'components/MyPage/Modify/Member/Member';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from 'store/modules/member';

class MemberContainer extends Component {
    
    getMemberContentData = () => {
        const { user_profile, name, password, confirm, email, introduce, MemberActions } = this.props;
        
        MemberActions.getMemberContentData ({
            user_profile, name, password, confirm, email, introduce
        })
    }

    componentDidMount() {
        this.getMemberContentData();
    }

    render() {
        // {console.log("memberContainer render : ", this.props);}
        const { loading, members } = this.props;
        // console.log(members);
        if(loading) return null;
        return (
            <Fragment>
                <MemberContentData members={members} />
            </Fragment>
        )
    }
}

export default connect (
    (state) => ({
        members: state.member.get('members'),
        loading: state.pender.pending['member/GET_MEMBER_LIST']
    }),
    (dispatch) => ({
        MemberActions: bindActionCreators(memberActions, dispatch)
    })
)(MemberContainer)
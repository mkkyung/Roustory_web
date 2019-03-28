import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
// import MemberContent from './Member';
import ScheduleContainer from 'containers/mypage/ScheduleContainer';
import MemberContainer from 'containers/member/MemberContainer';

const cx = classNames.bind(styles);


class Modify extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            prettyRoute: 'selectList'/* ,
            prettyRoute: 'memberList', */
        };

        this.updatePrettyRoute.bind(this);
        this.isSameRoute.bind(this);
    }

    updatePrettyRoute (route) {
        this.setState({
            prettyRoute: route,
        })
    }

    isSameRoute (uri) {
        return (this.state.prettyRoute === uri) ? `${uri}--is-activate` : '';
    }
    
    render() {

        const titles = this.props.titles;
        const members = this.props.members;
        const RouteScheduleContentData = {
            selectList: <ScheduleContainer titles={ titles } isSameRoute={this.isSameRoute}/>,
            memberList: <MemberContainer members={ members }  isSameRoute={this.isSameRoute} /> 
        }
        /* console.log('aads :', this.isSameRoute('selectList'));*/
        const Tag = RouteScheduleContentData[this.state.prettyRoute];

        return (
            <div className={cx('modify1')}>
                <div className={cx('modify2')}>
                    <div className={cx('contain')}>
                        <div className={cx('contain2')}>
                            <span className={cx('contain3')}>마이페이지</span>
                        </div>
                        <div className={cx('contain-bottom')}>
                            <div className={cx('contain-bottom2')}>
                                <div className={cx(`selectList`, `${this.isSameRoute('selectList')}`)} onClick={ () => this.updatePrettyRoute('selectList') }>
                                    <div className={cx('selectList-schedule')}>
                                        <span className={cx('plan-schedule')}>일정표</span>
                                    </div>
                                </div>
                                <div className={cx(`memberList`, `${this.isSameRoute('memberList')}`)}  onClick={ () => this.updatePrettyRoute('memberList') }>
                                    <div className={cx('members-modify')}>
                                        <span className={cx('member-modify')}>회원정보 수정</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { Tag }
                    </div>
                </div> 
            </div>
        );
    }
}

export default Modify;
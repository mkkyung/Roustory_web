import React, {Component, Fragment} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ReviewList from 'components/Review/ReviewList';
import ReviewTop from 'components/Review/ReviewTop';
import ReviewPagination from 'components/Review/ReviewPagination';
import * as reviewActions from 'store/modules/review';

class ReviewContainer extends Component{
    getReivewList = () => {
        const {order,  ReviewActions} = this.props;
        console.log('DB QUERY (order) : ', order)
        ReviewActions.getReivewList({
            order
        });
    }

    getEventList = () => {
        const {ReviewActions} = this.props;
        ReviewActions.getEventList();
    }

    componentDidMount() {
        this.getReivewList();
        this.getEventList();
    }

    handleSubmit = async (order) => {
        const {ReviewActions} = this.props;
        ReviewActions.setOrder({order});
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps : ', prevProps.order, this.props.order);
        //페이지 태그가 바뀔때 리스트를 다시 불러옵니다.
        if(prevProps.order !== this.props.order){
            this.getReivewList();
        }

        //페이지 태그가 바뀔때 리스트를 다시 불러옵니다.
        /*if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag){
            this.getReivewList();
            this.getEventList();
            //스크롤바를 맨위로 이동
            document.documentElement.scrollTop = 0;
        }*/
    }

    render(){
        const {loading, reviewLists, eventLists, order} = this.props;
        const {handleSubmit} = this;
        // if(loading) return null; 
        console.log("RevieContainser")
        return (
            <Fragment>
                <ReviewTop eventLists={eventLists} onSubmit={handleSubmit}/>
                {/*<ReviewPagination eventLists={eventLists} order={order}/>*/}
                <ReviewList reviewLists={reviewLists} order={order}/>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        reviewLists: state.review.get('reviewLists'),
        eventLists: state.review.get('eventLists'),
        order: state.review.get('order'),
        loading:state.pender.pending['review/GET_REVIEW_LIST']
    }),
    (dispatch) => ({
        ReviewActions : bindActionCreators(reviewActions, dispatch)
    })
)(ReviewContainer);
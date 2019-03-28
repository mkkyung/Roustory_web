import React, {Fragment} from 'react';
import ReviewDetailContainer from 'containers/reviewDetail/ReviewDetailContainer';
const ReviewDetailPage = ({match}) => {
    console.log('match : ', match.params);
    const {course_cd} = match.params;
    return(
        <Fragment>
            <ReviewDetailContainer course_cd = {course_cd}/>
        </Fragment> 
    )
};

export default ReviewDetailPage;
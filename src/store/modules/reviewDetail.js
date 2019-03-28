import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

//action types
const GET_REVIEW_LIST = 'reviewDetail/GET_REVIEW_LIST';

//action creators
export const getReviewContentData = createAction(GET_REVIEW_LIST, api.getReviewContentData, meta => meta);

//intial state
 const initialState = Map({
     posts:List()     
 });

//reducer
export default handleActions({
    ...pender({
        type:GET_REVIEW_LIST,
        onSuccess: (state, action) => {
            const{data:posts} = action.payload;
            return state.set('posts', fromJS(posts))            
        }
    })
}, initialState)
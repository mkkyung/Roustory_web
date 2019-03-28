import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

//action types
const GET_REVIEW_LIST = 'review/GET_REVIEW_LIST';
const GET_EVENT_LIST = 'review/GET_EVENT_LIST';
const SET_ORDER = 'review/SET_ORDER';

//action creators
export const getReivewList = createAction(GET_REVIEW_LIST, api.getReviewList, meta => meta);
export const getEventList = createAction(GET_EVENT_LIST, api.getEventList, meta => meta);
export const setOrder = createAction(SET_ORDER);

//initial state
const initialState = Map({
    reviewLists:List(),
    eventLists:List(),
    order:String
});

//reducer
export default handleActions({
    [SET_ORDER]: (state, action) => {
        const { order } = action.payload;
        //console.log('order :', order);
        //console.log(action.payload)
        return state.set('order', order);
    },
    ...pender({
        type:GET_REVIEW_LIST,
        onSuccess: (state, action) => {
            //console.log('action : ', action.payload)
            const{data:reviewLists} = action.payload;
            const{data:order} = action.payload.config;
            //console.log('order : ', order);

            console.log(fromJS(reviewLists));
            return state.set('reviewLists', fromJS(reviewLists));
        }
    }),
    ...pender({
        type:GET_EVENT_LIST,
        onSuccess: (state, action) => {
            const{data:eventLists} = action.payload;
            return state.set('eventLists', fromJS(eventLists));
        }
    })
}, initialState)
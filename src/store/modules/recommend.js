import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

//action types
const GET_RECOMMEND_LIST = 'recommend/GET_RECOMMEND_LIST';
const GET_RECOMMENDSELECT_LIST = 'recommend/GET_RECOMMENDSELECT_LIST';

//action creators
export const getRecommendContentData = createAction(GET_RECOMMEND_LIST, api.getRecommendContentData, meta => meta);
export const getRecommendListTitle = createAction(GET_RECOMMENDSELECT_LIST, api.getRecommendListTitle, meta => meta);

//intial state
 const initialState = Map({
     posts:List(),
     titles:List()     
 });

//reducer
export default handleActions({
    ...pender({
        type:GET_RECOMMEND_LIST,
        onSuccess: (state, action) => {
            const{data:posts} = action.payload;
            return state.set('posts', fromJS(posts))            
        }
    }),
    ...pender({
        type:GET_RECOMMENDSELECT_LIST,
        onSuccess: (state, action) => {
            const{data:titles} = action.payload;
            return state.set('titles', fromJS(titles))            
        }
    })
}, initialState)
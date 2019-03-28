import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_SCHEDULE_LIST = 'schedule/GET_SCHEDULE_LIST';
const GET_SCHEDULESELECT_LIST = 'schedule/GET_SCHEDULESELECT_LIST';

export const getScheduleContentData = createAction(GET_SCHEDULE_LIST, api.getScheduleContentData, meta => meta);
export const getScheduleListTitle = createAction(GET_SCHEDULESELECT_LIST, api.getScheduleListTitle, meta => meta);

const initialState = Map({
    posts: List(),
    titles: List()
})

export default handleActions ({
    ...pender({
        type: GET_SCHEDULE_LIST,
        onSuccess: (state, action) => {
            const{data:posts} = action.payload;
            return state.set('posts', fromJS(posts))
        }
    }),
    ...pender({
        type: GET_SCHEDULESELECT_LIST,
        onSuccess: (state,action) => {
            const{data:titles} = action.payload;
            return state.set('titles', fromJS(titles))
        }
    })
}, initialState)
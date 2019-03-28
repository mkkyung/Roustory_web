import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_MEMBER_LIST = 'member/GET_MEMBER_LIST';

export const getMemberContentData = createAction(GET_MEMBER_LIST, api.getMemberContentData, meta => meta);

const initialState = Map ({
    members: List()
})

export default handleActions ({
    ...pender ({
        type: GET_MEMBER_LIST,
        onSuccess: (state, action) => {
            const{data:members} = action.payload;
            console.log("success(members) : ", members);
            return state.set('members', fromJS(members))
        }
    }) 
}, initialState);
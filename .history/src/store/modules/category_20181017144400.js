import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';


import _ from 'lodash';
import { List } from 'immutable';
import { stat } from 'fs';
//action types

const COURS_DB = 'category/COURS_DB';
const RECOMMEND_DB = 'category/RECOMMEND_DB';
const POPULAR_DB = 'category/POPULAR_DB';
const COVER_SELECT_CATEGORY = 'category/COVER_SELECT_CATEGORY';
const POPULAR_CARD_SELECT_CATEGORY = 'category/POPULAR_CARD_SELECT_CATEGORY';
const POPULAR_CARD_SELECT_LIKE = 'category/POPULAR_CARD_SELECT_LIKE';
const RECOMMEND_SELECT_CATEGORY = 'category/RECOMMEND_SELECT_CATEGORY';
const RECOMMEND_SLIDE = 'category/RECOMMEND_SLIDE';
const RECOMMEND_SLIDE_INIT = 'category/RECOMMEND_SLIDE_INIT';

// console.log(createAction(api))

//action creators
export const coursDB = createAction(COURS_DB, api.coverDB)
export const recommendDB = createAction(RECOMMEND_DB, api.recommendDB)
export const popularDB = createAction(POPULAR_DB, api.popularDB)
export const coverSelectCategory = createAction(COVER_SELECT_CATEGORY)
export const popularCardSelectCategory = createAction(POPULAR_CARD_SELECT_CATEGORY)
export const popularCardSelectLike = createAction(POPULAR_CARD_SELECT_LIKE)
export const recommendSelectCategory = createAction(RECOMMEND_SELECT_CATEGORY)
export const recommendSlide = createAction(RECOMMEND_SLIDE)
export const recommendSlideInit = createAction(RECOMMEND_SLIDE_INIT)

//initial state
let initialState = fromJS({
    test: [
        {
            tag: 'course',
            text: '1',
            selected: true,
            content: [
                { title: '', text: '6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다.' }
            ]
        },
        {
            tag: 'course',
            text: '2',
            selected: false,
            content: [
                { title: '', text: 'd' }
            ]
        },
        {
            tag: 'course',
            text: '3',
            selected: false,
            content: [
                { title: '', text: 'a' }
            ]
        }
    ],
    coursData: [
        {
            tag: 'course',
            text: '6.25전쟁',
            selected: true,
            content: [
                { title: '', text: '6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다. 6.25 전쟁은 1950년 6월 25일 새벽에 북한 공산군이 남북군사분계선이던 38선 전역에 걸쳐 불법 남침함으로써 일어난 한국에서의 전쟁이다.' }
            ]
        },
        {
            tag: 'course',
            text: '4.3사건',
            selected: false,
            content: [
                { title: '', text: 'd' }
            ]
        },
        {
            tag: 'course',
            text: '일제강점기',
            selected: false,
            content: [
                { title: '', text: 'a' }
            ]
        }
    ],
    reviewData: [
        {
            tag: 'review',
            text: '전체보기',
            selected: true,
            content: [
                { user: 'test1', image: 'https://source.unsplash.com/250x300/?peach', title: '6.25', like: 1, isLike: false, selected:false, event_cd:'' },
                { user: 'test2', image: 'https://source.unsplash.com/250x300/?banana', title: '일제 강점기', like: 2, isLike: false, selected:false, event_cd:'' },
                { user: 'test3', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 3, isLike: false, selected:false, event_cd:'' },
                { user: 'test4', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 14, isLike: false, selected:false, event_cd:'' },
                { user: 'test5', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 5, isLike: false, selected:false, event_cd:'' },
                { user: 'test6', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 6, isLike: false, selected:false, event_cd:'' },
                { user: 'test7', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 7, isLike: false, selected:false, event_cd:'' },
                { user: 'test8', image: 'https://source.unsplash.com/250x300/?watermelon', title: '4.3', like: 8, isLike: false, selected:false, event_cd:'' },
            ]
        },
        {
            tag: 'review',
            text: '6.25전쟁',
            selected: false,
            content: [
                { user: 'test1', image: 'https://source.unsplash.com/250x161/?peach', title: '6.25', like: 1, isLike: false, selected:false, event_cd:'' }
            ]
        },
        {
            tag: 'review',
            text: '일제강점기',
            selected: false,
            content: [
                { user: 'test2', image: 'https://source.unsplash.com/250x161/?banana', title: '일제 강점기', like: 1, isLike: false, selected:false, event_cd:'' }
            ]
        },
        {
            tag: 'review',
            text: '4.3사건',
            selected: false,
            content: [
                { user: 'test3', image: 'https://source.unsplash.com/250x161/?watermelon', title: '4.3', like: 1, isLike: false, selected:false, event_cd:'' }
            ]
        },
    ],
    recommendData: [
        {
            tag: 'recommend',
            text: '전체보기',
            selected: true,
            slideNum: 0,
            content: [
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' },
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
            ]
        },
        {
            tag: 'recommend',
            text: '6.25전쟁',
            selected: false,
            slideNum: 0,
            content: [
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
            ]
        },
        {
            tag: 'recommend',
            text: '4.3사건',
            selected: false,
            slideNum: 0,
            content: [
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
            ]
        },
        {
            tag: 'recommend',
            text: '일제강점기',
            selected: false,
            slideNum: 0,
            content: [
                { hash: '#서대문 형무소 #6.25', image: 'https://source.unsplash.com/250x161/?watermelon' }
            ]
        }
    ]
});
//reducer
export default handleActions({
    ...pender({
        type: COURS_DB,
        onSuccess: (state, action) => {
            const { data } = action.payload;
            // console.log(data)
            data.map((a,index)=>{
                state = state.setIn(['coursData',index,'text'], data[index].Event_nm ).setIn(['coursData',index,'content','0','text'], data[index].Event_comment ) 
            })
            return state
            // return state.mergeIn(['test','0'], {'text':data[0].Event_nm} ).mergeIn(['test','1'], {'text':data[1].Event_nm} )
        }
    }),
    ...pender({
        type: RECOMMEND_DB,
        onSuccess: (state, action) => {
            const { data } = action.payload;
            state.getIn(['reviewData']).toJS().map((a,index)=>{
                data.map((recommend,i)=>{
                    if(index == 0){
                        state = state.setIn(['reviewData',index,'content', i, 'title' ], data[i].course_nm ).setIn(['reviewData',index,'content', i, 'image' ], data[i].img )
                    }
                })
            })
            return state
            // return state.mergeIn(['test','0'], {'text':data[0].Event_nm} ).mergeIn(['test','1'], {'text':data[1].Event_nm} )
        }
    }),
    ...pender({
        type: POPULAR_DB,
        onSuccess: (state, action) => {
            const { data } = action.payload;
            console.log(data)
            state.getIn(['recommendData']).toJS().map((a,index)=>{
                data.map((recommend,i)=>{
                    if(index == 0){
                        state = state.setIn(['recommendData',index,'content', i, 'hash' ], data[i].course_nm ).setIn(['recommendData',index,'content', i, 'image' ], data[i].img )
                    }
                })
            })
            return state
            // return state.mergeIn(['test','0'], {'text':data[0].Event_nm} ).mergeIn(['test','1'], {'text':data[1].Event_nm} )
        }
    }),
    [COVER_SELECT_CATEGORY]: (state, action) => {
        const { selected, bool, i } = action.payload;
        console.log(action.payload)
        return state.setIn(['coursData', i, 'selected'], bool)
    },
    [POPULAR_CARD_SELECT_CATEGORY]: (state, action) => {
        const { selected, bool, i } = action.payload;
        return state.setIn(['reviewData', i, 'selected'], bool)
    },
    [POPULAR_CARD_SELECT_LIKE]: (state, action) => {
        const { first_index, second_index, isLike } = action.payload
        return state.setIn(['reviewData', first_index, 'content', second_index, 'isLike'], isLike)
    },
    [RECOMMEND_SELECT_CATEGORY]: (state, action) => {
        const { selected, bool, i } = action.payload;
        return state.setIn(['recommendData', i, 'selected'], bool)
    },
    [RECOMMEND_SLIDE_INIT]: (state, action) => {
        const { i, num } = action.payload;
        return state.setIn(['recommendData', i, 'slideNum'], num)
    },
    [RECOMMEND_SLIDE]: (state, action) => {
        const { i, num } = action.payload;
        return state.setIn(['recommendData', i, 'slideNum'], state.getIn(['recommendData', i, 'slideNum']) + num)
    }
}, initialState)
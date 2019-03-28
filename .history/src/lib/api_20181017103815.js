import axios from 'axios';
import queryString from 'query-string';

//export const getReviewList = ({limit}) => axios.get(`/board/posts/?${queryString.stringify({limit})}`);
export const getPostList = ({tag, page}) => axios.get(`/board/posts/?${queryString.stringify({tag, page})}`);
export const getRecommendContentData = ({title, img, event_cd}) => axios.get(`/recommend/recommendlist?${queryString.stringify({title, img, event_cd})}`);
//export const getReviewContentData = ({location, img, budget, bus, subway, text}) => axios.get(`/reviewDetail/reviewDetailContent?${queryString.stringify({location, img, budget, bus, subway, text})}`);
export const getReviewContentData = ({course_cd}) => axios.get(`/reviewDetail/reviewDetailContent/${course_cd}`);

export const getRecommendListTitle = ({event_nm, event_cd}) => axios.get(`/recommend/recommendSelectList?${queryString.stringify({event_nm, event_cd})}`);
/* .then(response => console.log('response : ', response)); */

export const readLogin = ({username, password}) => axios.post('/login/posts', {username, password});
// export const getLogin = (id) => axios.get(`/login/posts/${id}`);


export const coverDB = () => axios.post('/home/home')

export const login = (User_id, password) => axios.post('/login/posts', { User_id, password });
export const logout = () => axios.post('/login/posts/logout');

export const checkEmailExists = (email) => axios.get('/login/posts/check/email' + email);
export const checkUsernameExists = (username) => axios.get('/login/posts/check/username', {username});

export const facebookLogin = (accessToken) => axios.post('/login/posts/facebookLogin', { accessToken });
export const register = (email, username, password) => axios.post('/login/posts/register', {email, username, password});

export const getReviewList = ({order}) => axios.post(`/review/reviewlist`, {order}).then(response => console.log('response : ', response));;
export const getEventList = () => axios.post(`/review/eventlist`);

export const getScheduleContentData = ({title, img, user_profile, course_cd}) => axios.get(`/mypage/schedulelist?${queryString.stringify({title,img,user_profile, course_cd})}`);
export const getScheduleListTitle = ({event_nm, event_cd}) => axios.get(`/mypage/scheduleSelectList?${queryString.stringify({event_nm, event_cd})}`);

export const getMemberContentData = ({user_profile, name, password, confirm, email, introduce}) => axios.get(`/mypage/memberlist?${queryString.stringify({user_profile, name, password, confirm, email, introduce})}`);

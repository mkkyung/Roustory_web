import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';                   //로그인
const LOGOUT = 'base/LOGOUT';                 //로그아웃
const CHECK_EMAIL_EXISTS = 'base/CHECK_EMAIL_EXISTS';
const CHECK_USERNAME_EXISTS ='base/CHECK_USERNAME_EXISTS';        //id 중복 확인
const CHANGE_INPUT = 'base/CHANGE_INPUT';     //input 값 변경
const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';

const TEMP_LOGIN = 'base/TEMP_LOGIN';
// const REGISTER_INPUT = 'base/REGISTER_INPUT';

const SET_ERROR = 'base/SET_ERROR';           //오류 설정
const REGISTER = 'base/LOCAL_REGISTER'; //가입

const FACEBOOK_LOGIN = 'base/FACEBOOK_LOGIN';

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, api.checkEmailExists);
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, api.checkUsernameExists);

export const changeInput = createAction(CHANGE_INPUT);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const tempLogin = createAction(TEMP_LOGIN);
// export const registerInput = createAction(REGISTER_INPUT);

export const setError = createAction(SET_ERROR);
export const register = createAction(REGISTER, api.register);

export const facebookLogin = createAction(FACEBOOK_LOGIN, api.facebookLogin);

// initial state
const initialState = Map({
  // 모달의 가시성 상태
  modal: Map({ 
    remove: false,
    login: false,        // 추후 구현될 로그인 모달
    register: false
  }),
  registerModal: Map({
    form: Map({
      email: '',
      // User_id: '',
      username: '',
      password: '',
      passwordConfirm: '',
      error: false
    }),
    exists: Map({
      email: false,
      password: false
    }),
    error: null
  }),
  loginModal: Map({
    form: Map({
      // User_id: '',
      username: '',
      password: ''
    }),
    error: null
  }),

  result: Map({}),
  logged: false, // 현재 로그인 상태
  User_id : '비회원',
  isRegister: false
});

// reducer
export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], true);  
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], false);  
  },
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {  // 로그인 성공 시
      // const {isLogin} = action.payload.data;
      console.log('=========', action.payload.data)
      console.log(action.payload.data.isLogin, '=========', action.payload.data.user_id)
      return state.set('logged', action.payload.data.isLogin)
                  .set('User_id', action.payload.data.user_id);
    },
    onError: (state, action) => {  // 에러 발생 시      //?SET_ERROR만들어야 하는지
      return state.setIn(['loginModal', 'error'], true)
                  .setIn(['loginModal', 'username'], '')
                  .setIn(['loginModal', 'password'], '');
    }
  }),
  ...pender({
    type: LOGOUT,
    onSuccess: (state, action) => {
      return state.set('logged', !action.payload.data.logout);
    }
  }),
  ...pender({
    type: CHECK_EMAIL_EXISTS,
    onSuccess: (state, action) => {
      return state.setIn(['registerModal', 'exists', 'email'], action.payload.data.exists);
    }
  }),
  ...pender({
    type: CHECK_USERNAME_EXISTS,
    onSuccess: (state, action) => {
      return state.setIn(['registerModal', 'exists', 'username'], action.payload.data.exists);
    }
  }),
  ...pender({
    type: REGISTER,
    onSuccess: (state, action) => {
      // const {isRegister} = action.payload.data;           //?
      console.log(action.payload);
      // return state.set('registerModal', Map(action.payload.data));               //?
      
      // return state.set('email', action.payload.data.email)
      //             .set('username', action.payload.data.username)
      //             .set('password', action.payload.data.password);
      const {isRegister} = action.payload.data;
      return state.set('isRegister', isRegister.isRegister);
    },
    onError: (state, action) => {  // 에러 발생 시      //?SET_ERROR만들어야 하는지
      return state.setIn(['registerModal', 'error'], true)
                  .setIn(['registerModal', 'email'], '')
                  .setIn(['registerModal', 'username'], '')
                  .setIn(['registerModal', 'password'], '')
                  .setIn(['registerModal', 'passwordConfirm'], '');
    }
  }),
  ...pender({
    type: FACEBOOK_LOGIN,
    onSuccess: (state, action) => {  // 로그인 성공 시
      const {isLogin} = action.payload.data;
      return state.set('logged',isLogin);
    },
    onError: (state, action) => {  // 에러 발생 시      //?SET_ERROR만들어야 하는지
      return state.setIn(['loginModal', 'error'], true)
                  .setIn(['loginModal', 'accessToken'], '');
    }
  }),
  [CHANGE_INPUT]: (state, action) => {
    const { form, name, value } = action.payload;
    return state.setIn([form, 'form', name], value);
  },
  // [REGISTER_INPUT]: (state, action) => {
  //   const { name, value } = action.payload;
  //   console.log(name +'///////////'+ value);
  //   return state.setIn(['registerModal', name], value);
  // },
  /* [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'password'], value);
  }, */
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    // 로그인 모달의 상태를 초기 상태로 설정합니다(텍스트/에러 초기화).
    // const initialForm = initialState.get(action.payload);
    // return state.set(action.payload, initialForm);
    return state.set('loginModal', initialState.get('loginModal'));
  },
  [TEMP_LOGIN]: (state, action) => {
    return state.set('logged', true);
  },
  [SET_ERROR]: (state, action) => {                     //?
    const { form, message } = action.payload;
    return state.setIn([form, 'error'], message);
  }

  // [HEADER_LOGIN]: (state, action) => {
  //   const { i } = action.payload;
  //   console.log(i)
  //   console.log(action.payload)
  //   console.log(state.toJS())
  //   return state.setIn(['headerData', action.payload, 'isModal'], !state.getIn(['headerData', action.payload, 'isModal']))
  // },
  // [HEADER_MENU]: (state, action) => {
  //   return true
  // }
}, initialState)

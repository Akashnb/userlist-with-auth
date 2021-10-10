import * as actionTypes from './actionTypes';
import { dummyUsers } from '../../../utils/dummyUsers'

const userInfo = localStorage.getItem('loginUserInfo')

const INITIAL_STATE = {
  userList: dummyUsers,
  loginUserInfo: userInfo ? JSON.parse(userInfo) : {},
};

const reducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.USER_SIGN_UP:
      return {
        ...state,
        userList: [...state.userList, payload]
      };
    case actionTypes.SET_LOGIN_USER_INFO:
      return {
        ...state,
        loginUserInfo: payload
      };
    default:
      return state;
  }
};

export default reducer;
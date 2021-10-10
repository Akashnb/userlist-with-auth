import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import base64 from 'base-64';

import SignIn from './SignIn';
import { matchRegEx, required, email as emailRegEx, minValue, maxLength, showNotification, isEqual } from '../../../../utils';
import { SET_LOGIN_USER_INFO } from '../../redux/actionTypes';

const SignInContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.auth.userList);

  const validateForm = (values) => {
    const errors = {};
    errors.email = required(values.email) && 'Email is required';
    if (!errors.email) {
      errors.email = !matchRegEx(values.email, emailRegEx) && 'Invalid email';
    }
    errors.password = required(values.password) && 'password is required';
    if (!errors.password) {
      errors.password = !(!minValue(values.password, 8) && !maxLength(values.password, 15)) && 'Password must be 8-15 characters';
    }
    return errors;
  };

  const submitForm = (values) => {
    const findUser = userList.find((user) => isEqual(user.email, values.email))
    if (findUser) {
      if (isEqual(base64.decode(findUser.password), values.password)) {
        dispatch({ type: SET_LOGIN_USER_INFO,  payload: findUser })
        localStorage.setItem('loginUserInfo', JSON.stringify(findUser))
        history.push('/app')
      } else {
        showNotification('Incorrect username or password', 'error', 6000);
      }
    } else {
      showNotification('Couldn\'t find your account', 'error', 6000);
    }
  };

  return (
    <SignIn
      submitForm={submitForm}
      validate={validateForm}
    />
  );
};

export default SignInContainer;

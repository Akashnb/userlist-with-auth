import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import base64 from 'base-64';

import { matchRegEx, required, email as emailRegEx, minValue, maxLength, showNotification, isEqual } from '../../../../utils';
import SignUp from './SignUp';
import { USER_SIGN_UP } from '../../redux/actionTypes';

const SignUpContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.auth.userList);

  const validateForm = (values) => {
    const errors = {};
    errors.firstName = required(values.firstName) && 'firstName is required';
    errors.lastName = required(values.lastName) && 'lastName is required';
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
    const findIndex = userList.findIndex((user) => isEqual(user.email, values.email))
    if (findIndex === -1) {
      dispatch({ type: USER_SIGN_UP,  payload: { id: uuidv1(), ...values, password: base64.encode(values.password) } })
      showNotification('Congratulations your account has been successfully created', 'success');
      history.push('/signin');
    } else {
      showNotification('This email address already has an account', 'error', 6000);
    }
  };

  return (
    <SignUp
      submitForm={submitForm}
      validate={validateForm}
    />
  );
};

export default SignUpContainer;

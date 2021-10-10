import { toast, Flip } from 'react-toastify'; // Notification message container

const curMsgs = {};

export const showNotification = (message, type, timeOut) => {
  if (curMsgs[message]) {
    toast.update(curMsgs[message], {
      type,
      autoClose: timeOut,
      onClose: () => {
        delete curMsgs[message];
      },
    });
    return curMsgs[message];
  }
  curMsgs[message] = toast(`${message}`, {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
    transition: Flip,
    onClose: () => {
      delete curMsgs[message];
    },
  });
  return curMsgs[message];
};

export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = (value) => !value;

export const matchRegEx = (value, pattern) => (value && pattern && value.match(pattern));

export const minValue = (value, min) => value && value.length < min && min;

export const maxLength = (value, max) => value && value.length > max;

export const isEqual = (value, compareValue) => value === compareValue;

// Selectors

export const getUserList = (state) => state.auth.userList;

export const getLoginUserInfo = (state) => state.auth.loginUserInfo;
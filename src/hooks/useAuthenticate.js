import { useMemo } from 'react';
import { useSelector } from 'react-redux'
import { getLoginUserInfo } from '../utils';

export const useAuthenticate = () => {
  const loginUserInfo = useSelector(getLoginUserInfo);

  const isAuthenticated = useMemo(() => {
    if (loginUserInfo?.email) {
      return true
    }

    return false
  }, [loginUserInfo])


  return {
    isAuthenticated
  };
};

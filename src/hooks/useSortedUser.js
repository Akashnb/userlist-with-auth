import { useMemo } from "react"
import { useSelector } from 'react-redux';

import { getUserList } from '../utils';

export const useSortedUser = (search) => {
  const userList = useSelector(getUserList);

  const filterUserBasedOnSearch = (user, search) => {
    const searchStrTrimmed = search && String(search).trim().toLowerCase()

    if (!searchStrTrimmed) {
      return true
    }

    const { firstName, lastName, email } = user;
  
    if (firstName?.includes(searchStrTrimmed)) {
      return true
    }
    if (lastName?.includes(searchStrTrimmed)) {
      return true
    }
    if (email?.includes(searchStrTrimmed)) {
      return true
    }
    return false
  }

  const sortedItems = useMemo(() => {
    if (!search) {
      return userList
    }

    return userList.filter((user) => filterUserBasedOnSearch(user, search))
  }, [userList, search])

  return {
    sortedItems,
  }
}
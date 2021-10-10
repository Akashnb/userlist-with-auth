import React, { useEffect } from 'react';
import { useSortedUser } from '../../hooks/useSortedUser';

import Dashboard from './Dashboard';

const DashboardContainer = () => {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { sortedItems } = useSortedUser(search);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setPage(0);
  }, [sortedItems])

  return (
    <Dashboard
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      page={page}
      userList={sortedItems}
      search={search}
      handleSearch={handleSearch}
    />
  )
}

export default DashboardContainer;
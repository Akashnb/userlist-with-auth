import * as React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../../common/Header';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
];

const Dashboard = ({
  handleChangeRowsPerPage,
  handleChangePage,
  handleSearch,
  rowsPerPage,
  userList,
  search,
  page,
}) => (
  <>
    <Header />
    <Container maxWidth="xl">
      <Box
        sx={{
          height: 30,
        }}
      />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            User List
          </Typography>

          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <TextField
              label="Search"
              variant="standard"
              value={search}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
        </Toolbar>
        <Divider />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  </>
);

Dashboard.propTypes = {
  handleChangeRowsPerPage: PropTypes.func,
  handleChangePage: PropTypes.func,
  handleSearch: PropTypes.func,
  rowsPerPage: PropTypes.number,
  userList: PropTypes.instanceOf(Array),
  search: PropTypes.string,
  page: PropTypes.number,
};

Dashboard.defaultProps = {
  handleChangeRowsPerPage: () => {},
  handleChangePage: () => {},
  handleSearch: () => {},
  rowsPerPage: 10,
  userList: [],
  search: '',
  page: 0,
};

export default Dashboard;
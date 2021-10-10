import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Routes from "./Routes";
import reduxStore from './store';

import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={reduxStore}>
        <div className="App">
        <ToastContainer id="forToast" />
          <Routes />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

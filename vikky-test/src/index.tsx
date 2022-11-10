import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d95fb',
      light: '#0078be',
    },
    secondary: {
      main: '#ffca00'
    },
  },
  
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(','),
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1280,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

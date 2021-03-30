import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@material-ui/core/styles';
import AppContainer from './layouts/AppContainer';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import theme from './configs/theme';
function App() {
  return <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </Router>
  </Provider>; 
}

export default App;

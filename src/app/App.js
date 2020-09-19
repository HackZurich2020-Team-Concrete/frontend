import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '../theme';
import { DataProvider } from '../context/dataContext';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;

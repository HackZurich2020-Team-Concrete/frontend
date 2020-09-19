import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '../theme';
import Layout from '../components/Layout';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

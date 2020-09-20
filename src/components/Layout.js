import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import WarningIcon from '@material-ui/icons/Warning';
import Alert from '@material-ui/lab/Alert';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(
  theme => ({
    '@global *': {
      transition: 'background .125s ease',
    },
    '@global a': {
      color: theme.palette.secondary.main,
    },
    root: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
    },
    jsWarning: {
      gridArea: 'jswarning',
      padding: '1em 0',

      '& > *': {
        maxWidth: theme.shape.maxContentWidth,
        padding: '0 1em',
        margin: '0 auto',
      },
    },
    content: {
      display: 'flex',
      width: '100%',
    },
    list: {
      minWidth: '350px',
      width: '20%',
      maxWidth: '600px',
      height: '100vh',
    },
    details: {
      width: '100%',
      height: '100vh',
    },
  }),
  { name: 'layout' }
)

const Layout = ({ children }) => {
  const classes = useStyles()

  let listContent;
  let detailsContent;

  React.Children.forEach(children, (child, index) => {
    console.log(index);
    if (index === 0) {
      listContent = child;
    } else if (index === 1) {
      detailsContent = child;
    }
  });

  return (
    <div className={classes.root}>
      {/*
        CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
        This line must not be in themeContext! Otherwise, server-side rendering does not work correctly.
        */}
      <CssBaseline />
      <noscript>
        <div className={classes.jsWarning}>
          <Alert icon={<WarningIcon />} severity="error">
            You need JavaScript enabled to run this application!
            </Alert>
        </div>
      </noscript>
      <main className={classes.content}>
        <Paper className={classes.list} elevation={3} square>
          {listContent}
        </Paper>
        <div className={classes.details}>
          {detailsContent}
        </div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

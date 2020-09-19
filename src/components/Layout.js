import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import WarningIcon from '@material-ui/icons/Warning';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles(
  theme => ({
    '@global *': {
      transition: 'background .125s ease',
    },
    '@global a': {
      color: theme.palette.secondary.main,
    },
    root: {
      width: '100%',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr auto',
      gridTemplateAreas: "'header' 'jswarning' 'content' 'footer'",
      background: theme.palette.background.default,
    },
    header: {
      marginBottom: 5,
      gridArea: 'header',
      display: 'block',
      width: '100%',
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
      gridArea: 'content',
      position: 'relative',
      width: '100%',
      '& > *': {
        maxWidth: theme.shape.maxContentWidth,
        padding: '0 1em',
        margin: '0 auto',
      },
    },
    footer: {
      gridArea: 'footer',
      width: '100%',
    },
  }),
  { name: 'layout' }
)

const Layout = ({ children }) => {
    const classes = useStyles()

    let content = children;

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
        <main className={classes.content}>{content}</main>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

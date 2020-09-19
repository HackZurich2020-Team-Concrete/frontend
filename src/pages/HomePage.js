import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Logo from "../components/Logo";
import "./HomePage.css";

const useStyles = makeStyles(
    theme => ({
      root: {
        textAlign: 'center',
      },
      header: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
      },
      link: {
        color: '#61dafb',
      },
    }),
    { name: 'home' }
);


const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <header className={classes.header}>
            <Logo />
            <Button variant="contained" color="primary">Login</Button>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className={classes.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
};

export default HomePage;

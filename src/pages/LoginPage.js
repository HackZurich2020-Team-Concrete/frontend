import React from "react";
import Logo from "../components/Logo";
import { Button, makeStyles } from "@material-ui/core";
import "./HomePage.css";

const LoginPage = () => {
  return (
    <div className="home">
      <header className="Home-header">
        <Logo />
          <a
          className="Login-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Button variant="contained" color="primary">Login</Button>
          </a>
        <p>
        Troubles logging in? 
        <a
          className="Login-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Click here.</a>
        </p>

      </header>
    </div>
  );
};

export default LoginPage;

import React from "react";
import Logo from "../components/Logo";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <header className="Home-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
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

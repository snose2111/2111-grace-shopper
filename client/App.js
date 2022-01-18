import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div id="app">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="routes">
        <Routes />
      </div>
    </div>
  );
};

export default App;

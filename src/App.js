import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import { Route } from "react-router-dom";
import Demo from "./Demo";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Demo} />
      <Route exact path="/task" component={Demo} />
    </div>
  );
}

export default App;

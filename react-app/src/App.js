import React, { Component } from "react";
import "./App.css";
import Projects from "./Projects";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1>Its working!!!</h1>
        <Projects />
      </div>
    );
  }
}

export default App;

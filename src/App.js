import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands";
import WandList from "./WandList";
class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="content col-10">
            <div className="authors">
              <h1>Wands</h1>
              <WandList wands={wands} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

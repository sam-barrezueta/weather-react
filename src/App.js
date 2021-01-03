import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card app-card">
          <div className="card-body">
            <Search />
            <Forecast />
          </div>
        </div>
        <div className="footer">
          <a href="https://github.com/sam-barrezueta/weather-react">
            Open-source code {" "}
          </a>
          by Sam Barrezueta
        </div>
      </div>
    </div>
  );
}

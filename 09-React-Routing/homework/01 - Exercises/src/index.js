import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));
//EJERCICIO EN GRUPO

import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
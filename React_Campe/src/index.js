// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import { Provider } from 'react-redux';
import Store from "./pages/SingleProduct/ReviewRedux/store";



ReactDOM.render(
  <Router>
    {" "}
    {/* Wrap your App with BrowserRouter */}
    {/* <React.StrictMode> */}
      <Provider store={Store}>
      <App />
      </Provider>
    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById("root")
);

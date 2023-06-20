import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// // import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import authReducer from "./store/reducers/register";
// import productReducer from "./store/reducers/products";

import "./index.css";
import App from "./App";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

//animation
import AOS from "aos";

AOS.init({
  offset: 200,
  delay: 0,
  once: true,
  duration: 1000,
});



const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
reportWebVitals();

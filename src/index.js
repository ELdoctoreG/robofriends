import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./assets/css/main.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";

// Create logger
const logger = createLogger();

// Create rootReducer
const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

// Create store
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

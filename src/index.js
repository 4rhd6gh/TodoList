import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./useRedux/rootReducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger))
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

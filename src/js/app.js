import React from "react";
import { createStore, applyMiddleware } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import createLogger from "redux-logger";
import "./assets";
import reducer from "./reducer";
import routes from "./routes";

var middleware = [];

if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}

var store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

function renderApp() {
    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>,
        document.getElementById("app")
    );
}

store.subscribe(renderApp);
document.addEventListener("DOMContentLoaded", renderApp);
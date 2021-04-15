import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux"; // Keeps track of the store, which contains the global state
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Once the store is complete (after creating the reducers) I can wrap the App component in the Provider and use store
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

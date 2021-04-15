import * as api from "../api"; // import everything from the actions as api. We do this because there will be a lot of calls

// Create actions creators: Functions that return an action
// An action is an object that has a type and a payload
// Getting the payload (data) takes time so we have to use async(dispatch) from redux-thunk to get all the posts
const getPosts = () => async (dispatch) => {
	const action = { type: "FETCH_ALL", payload: [] };
	dispatch(action); // With redux-thunk you don't return the action, you have to use dispatch instead
};

import * as api from "../api"; // import everything from the actions as api. We do this because there will be a lot of calls

// Create actions creators: Functions that return an action
// An action is an object that has a type and a payload
// Getting the payload (data) takes time so we have to use async(dispatch) from redux-thunk to get all the posts
export const getPosts = () => async (dispatch) => {
	try {
		// This is the response from the api, which has the data object. Data represents our posts
		// response => data => data
		const { data } = await api.fetchPosts();
		// dispatch(action); // With redux-thunk you don't return the action, you have to use dispatch instead
		dispatch({ type: "FETCH_ALL", payload: data }); // we are dispatching the action
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

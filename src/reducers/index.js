import { combineReducers } from "redux";

// Importing the reducer
import posts from "./posts";

export default combineReducers({
	// Since the key and value are the same, I could just write a single 'posts'
	posts: posts,
});

import { combineReducers } from "redux";

// Importing the reducer
import posts from "./posts";

// Since the key and value are the same, I need write a single 'posts', not posts: posts
export default combineReducers({ posts });

import React from "react";
import Post from "./post/post";
import useStyles from "./styles";
import { useSelector } from "react-redux"; // Fetch the data from the global redux store

const Posts = () => {
	const posts = useSelector((state) => state.posts); // It is called posts from the reducers => index.js file
	const classes = useStyles();

	console.log(posts);

	return (
		<>
			<h1>Posts</h1>
			<Post />
			<Post />
		</>
	);
};

export default Posts;

// For styling: Ex: <h1 className={classes.xyz}>Posts</h1>

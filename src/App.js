import React, { useEffect } from "react"; // useEffect for the dispatch
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux"; // Dispatch an action

import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt="memories" height="80" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;

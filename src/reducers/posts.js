// A reducer is a function that accepts state and an action
// I am passing posts, but for this posts is actually state
// In reducers, state must always have a value, which is why we set the initial value as an empty array

export default (posts = [], action) => {
	//   return action || return state changed by the action

	// A lot of things can happen in reducers, so it is best to have a switch statement
	switch (action.type) {
		case "FETCH_ALL":
			// As soon as the action gets dispatched it comes here. Since we are immediately fetching the posts from the action we can just return the action payload, which is the actual posts
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		default:
			return posts;
	}
};

// I have finished the first video but still have the same errors. I should fix those before continuing

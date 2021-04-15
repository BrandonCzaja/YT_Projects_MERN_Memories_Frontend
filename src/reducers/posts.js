// A reducer is a function that accepts state and an action
// I am passing posts, but for this posts is actually state
// In reducers, state must always have a value, which is why we set the initial value as an empty array

const reducer = (posts = [], action) => {
	if (action.type === "CREATE") {
		//   return action || return state changed by the action

		// A lot of things can happen in reducers, so it is best to have a switch statement
		switch (action.type) {
			case "FETCH_ALL":
				return posts;
				break;
			case "CREATE":
				return posts;
				break;
			default:
				return posts;
		}
	}
};

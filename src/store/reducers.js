import { combineReducers } from "redux";
const initialstate = {
	value: 0,
};

function reducer(store = initialstate, action) {
	switch (action.type) {
		case "increment":
			return { value: store.value + 1 };
		case "decrement":
			return { value: store.value - 1 };
		default:
			return { value: 0 };
	}
}

//if you have multiple reducers as above
//counter is the name  of the reducer
const reducers = combineReducers({ counter: reducer });

export default reducers;

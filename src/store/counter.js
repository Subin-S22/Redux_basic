import { createStore } from "redux";
import reducers from "./reducers";

//now store is store = {counter:{value:0}} format
const store = createStore(reducers);

export default store;

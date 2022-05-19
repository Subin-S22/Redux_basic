import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //to get the actions
  const dispatch = useDispatch();
  //to get the store value from the counter
  const count = useSelector((store) => store.counter.value);

  return (
    <div className="App">
      <div>count:{count}</div>

      <button
        onClick={
          () =>
            dispatch({
              type: "increment",
            }) /*dispatch method will take a object {type, payload}*/
        }
      >
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default App;

import { createStore } from "redux";

// reducer
const initialState = { counter: 0, ssss: "ccc" };
const reducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "DEC") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  return state;
};
// store
// state
const store = createStore(reducer);

//ACTIONS
const increment = () => {
  return {
    type: "INC",
    payload: 1,
  };
};

const decrement = () => {
  return {
    type: "DEC",
    payload: 1,
  };
};
// actions

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(() => {
  return {
    type: "ssss",
  };
});

function App() {
  return <div>APP</div>;
}

export default App;

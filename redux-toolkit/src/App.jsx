import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainCounter from "./component/MainCounter";
import UserState from "./component/UserState";

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserState />
        <MainCounter />
      </div>
    </Provider>
  );
}

export default App;

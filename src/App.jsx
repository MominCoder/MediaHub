import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./component/Body";
import Header from "./component/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import {store} from "./shared";
import { Mainlayout } from "./Mainlayout";

function App() {

  return (
    <>
      <Provider store={store}>
        <Mainlayout/>
      </Provider>
    </>
  )
}

export default App

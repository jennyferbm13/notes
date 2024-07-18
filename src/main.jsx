import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
const persistor = persistStore(store);
{
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);

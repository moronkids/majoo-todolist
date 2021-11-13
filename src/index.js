import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "redux/index"; //store dari pada redux
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux"; // hoc atau high order component
import Hooks from "providers";

ReactDOM.render(
  <React.StrictMode>
    <Hooks>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Hooks>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

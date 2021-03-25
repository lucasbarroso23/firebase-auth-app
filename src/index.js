import React from "react";
import ReactDOM from "react-dom";
import { UserDataProvider } from "./context/UserDataContext";
import "./index.css";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <Routes />
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

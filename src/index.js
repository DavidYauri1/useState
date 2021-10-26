import { StrictMode } from "react";
import ReactDOM from "react-dom";

import UsersList from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UsersList />
  </StrictMode>,
  rootElement
);

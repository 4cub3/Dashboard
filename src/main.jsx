import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import DarkModeProvider from "./store/DarkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <BrowserRouter>
      {" "}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DarkModeProvider>
);

import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

const getServerUrl = () => {
  const { hostname } = window.location;

  if (hostname.includes("localhost")) {
    return "http://localhost:3001/api";
  } else if (hostname.includes("clientes-desarrollo.vercel")) {
    return "https://clientesdesarrolo.onrender.com/api";
  } else if (hostname.includes("sml-app.com")) {
    return "https://sml-app.com/api";
  }

  return "http://localhost:3001/api";
};

axios.defaults.baseURL = getServerUrl();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

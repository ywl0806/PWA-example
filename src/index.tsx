import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceWorker.js").then(() => {
    console.log("service worker registed");
  });
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MapValuesProvider } from "./context/mapContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MapValuesProvider>
      <App />
    </MapValuesProvider>
  </React.StrictMode>
);

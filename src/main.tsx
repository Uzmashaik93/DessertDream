import { StrictMode } from "react";
import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </StrictMode>
);

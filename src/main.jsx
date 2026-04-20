import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./router/Routes";
import InstalledAppsProvider from "./context/InstalledAppsProvider";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <InstalledAppsProvider>
      
    <RouterProvider router={router} />

    </InstalledAppsProvider>
  

  </StrictMode>
);

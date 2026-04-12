import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Apps from "./Pages/apps/Apps";
import InstallApps from "./Pages/installApps/installApps";

const router = createBrowserRouter([

  {
    path:"/",
    element: <RootLayout/>, 
    children: [
      {
        path:"/",
        element: <h2>HomePage</h2>,
      },
      {
        path: "/apps",
        element: <Apps/>
      },
      {
        path: "/installedApps",
        element: <InstallApps/>
      },
    ],
    errorElement: <h2>This page is not found</h2>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>
);

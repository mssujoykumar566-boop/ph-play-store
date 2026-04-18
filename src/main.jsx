import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Apps from "./Pages/apps/Apps";
import InstallApps from "./Pages/installApps/installApps";
import "./index.css"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import HomePage from "./Pages/homePage/HomePage";

const router = createBrowserRouter([

  {
    path:"/",
    element: <RootLayout/>, 
    children: [
      {
        // path:"/",
        index: true,
        element: <HomePage/>,
        loader: () => fetch("/data.json")
      },
      {
        path: "/apps",
        element: <Apps/>,
      },
      {
        path: "/installedApps",
        element: <InstallApps/>
      },
    ],
    errorElement: <NotFoundPage/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>
);

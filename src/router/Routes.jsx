import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../Pages/homePage/HomePage";
import Apps from "../Pages/apps/Apps";
import InstallApps from "../Pages/installApps/installApps";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import AppsDetails from "../Pages/appDetails/AppsDetails";
import Dashboard from "../Pages/dashboard/Dashboard";


export const router = createBrowserRouter([

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
        path: "/apps/:id",
       element: <AppsDetails/>
      },
      {
        path: "/installedApps",
        element: <InstallApps/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
    ],
    errorElement: <NotFoundPage/>,
  },
]);
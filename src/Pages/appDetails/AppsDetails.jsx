import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import useAppsData from "../../hooks/useAppsData";
import { HashLoader } from "react-spinners";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { toast } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  // console.log(typeof id,'id');
  const { apps, loading } = useAppsData();
  //    console.log(apps,loading,"apps","loading");

  const expectedApp = apps.find((app) => String(app.id) === id);
  //    console.log(expectedApp,"expectedApp")

  const { installedApp, setInstalledApp } = useContext(InstallAppsContext);
  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#ad46ff" />
      </div>
    );
  }

  const handleInstalledApp = () => {
    setInstalledApp([...installedApp, expectedApp]);
    toast.success(`${expectedApp.title} is installed!`);
  };
  console.log(installedApp, "installedApp");

  return (
    <div className="container mx-auto">
      <div className="shadow p-6 space-y-2 text-center">
        <img className="mx-auto h-62 w-auto" src={expectedApp.image} alt="" />
        <h2 className="font-semibold text-3xl text-black-500">
          {expectedApp.title}
        </h2>
        <p className="font-semibold text-3xl ">
          Developed by:{" "}
          <span className="font-semibold text-3xl text-purple-500">
            {expectedApp.companyName}
          </span>
        </p>
        <Link  to={'/installedApps'}>
        <button
          onClick={handleInstalledApp}
          className="btn bg-purple-500 text-white"
        >
          Install Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AppsDetails;

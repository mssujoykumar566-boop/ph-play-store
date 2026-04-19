import React, {  useEffect } from "react";
import { useState } from "react";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";
import UseAppsData from "../../hooks/UseAppsData";
// import {  useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps,  "apps")

  //  const data = useLoaderData()
  //     console.log(data,"Data from HomePage")

  const {apps,loading} = UseAppsData();
  console.log(loading, "Loading")
  return (
    <div className="container mx-auto my-15">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptas soluta dicta ratione distinctio amet sapiente alias nam, odio
          saepe.
        </p>
      </div>
    
      {loading ? (
        <div className="flex items-center justify-center">
            <HashLoader color="#ad46ff" />
        </div>
         ): (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.slice(0,9).map((app, ind) => {
          return (
            <AppCard app={app} key={ind}/>
          );
        })}
      </div>
      )}
    <div className="text-center mt-5 ">
    <Link to={'/apps'}>
      <button className="btn bg-purple-500">Show All</button>
    </Link>

        </div>
    </div>
  );
};

export default TrendingApps;

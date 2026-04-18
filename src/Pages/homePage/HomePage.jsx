import React from 'react';
import Banner from '../../Component/homePage/Banner';
import Stats from '../../Component/homePage/Stats';
import TrendingApps from '../../Component/homePage/TrendingApps';
// import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
   
    return (
        <>
          <Banner/>
          <Stats/>
          <TrendingApps/>
        </>
    );
};

export default HomePage;
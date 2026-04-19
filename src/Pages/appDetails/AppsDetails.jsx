import React from 'react';
import { useParams } from 'react-router';
import UseAppsData from '../../hooks/UseAppsData';

const AppsDetails = () => {
    const {id} = useParams();
    console.log(typeof id,'id'); 
       const {apps,loading} = UseAppsData();
       console.log(apps,loading,"apps","loading");

       const expectedApp = apps.find((app) => String(app.id) === id);
       console.log(expectedApp,"expectedApp")

   

    return (
        <div className='container mx-auto'>
           <img src={expectedApp.image} alt="" />
           <h2>{expectedApp.title}</h2>
        </div>
    );
};

export default AppsDetails;
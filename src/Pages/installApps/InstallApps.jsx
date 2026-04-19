import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';


const InstallApps = () => {

    const {installedApp,setInstalledApp} = useContext(InstallAppsContext)

    console.log(installedApp,"contextData")
    return  (<div className='container mx-auto my-10'>
            {
                installedApp.map((app,ind) => {
                    return (<div className='flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-5' key={ind}>
                        <img className='h-30 w-auto' src={app.image} alt="" />
                        <h2 className='font-semibold terxt-2xl'>{app.title}</h2>
                    </div>)
                })
            }
        </div>
        )
    
};

export default InstallApps;
import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import { toast } from 'react-toastify';

const InstallApps = () => {

    const {installedApp,setInstalledApp} = useContext(InstallAppsContext)

    console.log(installedApp,"contextData")

    const handleUnistall = (app) => {
        console.log(app,"need to unistall");

        const restApps = installedApp.filter(iApp =>iApp.id != app.id);
        console.log(restApps,'restApps');

        setInstalledApp(restApps);
          toast.warning(`${app.title} is uninstalled!`)
    };

    return  (<div className='container mx-auto my-10'>
             
            {
              installedApp.length === 0 ? <h2 className='font-bold text-4xl text-center my-5'>No installed app found!</h2> :  installedApp.map((app,ind) => {
                    return (<div className='flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-5' key={ind}>
                       <div>
                     
                        <img className='h-30 w-auto' src={app.image} alt="" />
                        <h2 className='font-semibold text-2xl'>{app.title}</h2>
                       </div>
                        <button onClick={() => handleUnistall(app)} className='btn bg-secondary'>Uninstall</button>
                    </div>);
                })
            }
        </div>
        )
    
};

export default InstallApps;
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import useAppsData from '../../hooks/useAppsData';

const Dashboard = () => {

     const { installedApp,  } = useContext(InstallAppsContext);
       const {apps,loading} = useAppsData();
       console.log(apps, 'apps');

       const unistalledAppsLength = apps.length - installedApp.length
       console.log(unistalledAppsLength,installedApp.length,'unistalledApps')

    const data = [
        {name: "Installed", value: installedApp.length, fill: "#0088FE"},
        {name: "Unistalled", value: unistalledAppsLength, fill: "#00C49F"},
       
    ]

    return (
        <div className='my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto'>
            <h2 className='font-semibold text-3xl mb-10 text-center'>Installed and Unistalled apps</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: "auto", aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>
        </div>
    );
};

export default Dashboard;
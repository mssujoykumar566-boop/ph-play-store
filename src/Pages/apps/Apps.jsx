
import { HashLoader } from 'react-spinners';
import AppCard from '../../Component/ui/AppCard';
import UseAppsData from '../../hooks/useAppsData';

const Apps = () => {

    const {apps,loading} = UseAppsData();
  

    
      // console.log(apps,loading)
    return (
        <div  className='container mx-auto my-10'>
            <div className="mb-10 text-center max-w-[50%] mx-auto space-y-3">
        <h2 className="font-bold text-4xl">All Apps</h2>
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
        {apps.map((app, ind) => {
          return (
            <AppCard app={app} key={ind}/>
          );
        })}
      </div>
      )}
        </div>
    );
};

export default Apps;
import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
              <figure>
                <img  className='h-50 w-auto' src={app.image} alt={app.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className="flex justify-between items-center gap-4">
                  <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
                    <FaDownload />
                    {app.downloads}
                  </span>
                  <span className="bg-orange-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
                    {app.ratingAvg} <FaStar />{" "}
                  </span>
                </div>
              </div>
            </div>
    );
};

export default AppCard;
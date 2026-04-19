import { useState } from "react";
import { InstallAppsContext } from "./InstallAppsContext";

const InstalledAppsProvider = ({children}) => {
        const [installedApp,setInstalledApp]  = useState([]);
    const data = {
    installedApp,
    setInstalledApp
}

return (
    <InstallAppsContext.Provider value={data}>
    {children}
    </InstallAppsContext.Provider>
);
};

export default InstalledAppsProvider;
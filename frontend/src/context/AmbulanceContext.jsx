import { createContext, useState } from 'react';

export const AmbulanceDataContext = createContext();

const AmbulanceContext = ({ children }) => {
    const [ ambulance, setAmbulance ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateAmbulance = (ambulanceData) => {
        setAmbulance(ambulanceData);
    };

    const value = {
        ambulance,
        setAmbulance,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateAmbulance
    };

    return (
        <AmbulanceDataContext.Provider value={value}>
            {children}
        </AmbulanceDataContext.Provider>
    );
};

export default AmbulanceContext;
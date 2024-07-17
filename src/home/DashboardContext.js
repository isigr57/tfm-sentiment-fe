import { useContext, createContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {

    const [page, setPage] = useState('sessions');

    return (
        <DashboardContext.Provider value={{ page, setPage }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    return useContext(DashboardContext);
};

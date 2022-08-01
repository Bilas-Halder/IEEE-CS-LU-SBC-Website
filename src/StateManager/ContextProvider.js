import React, { createContext } from 'react';
import useManagingStates from './managingStates';


export const AllStateContext = createContext();

const ContextProvider = ({ children }) => {
    const allContext = useManagingStates();
    return (
        <AllStateContext.Provider value={allContext}>
            {children}
        </AllStateContext.Provider>
    );
};

export default ContextProvider;
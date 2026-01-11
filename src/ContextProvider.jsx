import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const StudContext = createContext();

const ContextProvider = ({children}) => {
    
const [StudList, setStudList] = useState(
[
    {
     roll_no: '100327',
     name : 'Poorani',
     fvrtd : false   
    },
    {
     roll_no: '100321',
     name : 'Kanitha',
     fvrtd : false   
    },
    {
     roll_no: '100325',
     name : 'Padma',
     fvrtd : false 
    },
    {
     roll_no: '100330',
     name : 'Gino Raj',
     fvrtd : false 
    },
    {
     roll_no: '100335',
     name : 'Aishwarya',
     fvrtd : false 
    },
    {
     roll_no: '100341',
     name : 'Dayanithi',
     fvrtd : false 
    }
]);
    

    return (
    <StudContext.Provider value={{StudList, setStudList}}>
        {children}
    </StudContext.Provider>
  )
}

export default ContextProvider;
export {StudContext};

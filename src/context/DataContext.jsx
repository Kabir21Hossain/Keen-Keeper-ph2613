'use client';
import { createContext, useState,useContext } from "react";


const dataContext=createContext();

export const DataProvider=({children})=>{
    const [data,setData]=useState([]);

    return(
        <dataContext.Provider value={{data,setData}}>
            {children}
        </dataContext.Provider>
    )

}

export const UseDataContext=()=>{
    return useContext(dataContext);
}

export default DataProvider;


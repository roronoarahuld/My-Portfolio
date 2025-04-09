import React, { useState, useEffect, useContext, createContext } from "react";

const ApiContext = createContext()

export const ApiData = ({children}) => {
    const [storeData, setStoreData] = useState([])
    const [loading, setLoading] = useState(true);
    async function getData() {
        const url = "https://raw.githubusercontent.com/roronoarahuld/My-Portfolio/refs/heads/master/data.json";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setStoreData(json)

        } catch (error) {
            console.error(error.message);
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
    }, [storeData])

    return(
        <ApiContext.Provider value={{storeData, loading}}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApiData = () => {
    return useContext(ApiContext)
}
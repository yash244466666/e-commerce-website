/* eslint-disable */
import { createContext , useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../util/firebase/firebase.util"

// import SHOP_DATA from '../shop-data.js'


export const CategoriesContext = createContext({
    cetegoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [cetegoriesMap, setCetegoriesMap] = useState({});

    useEffect(() =>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCetegoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    // useEffect(() => {
    //     addConnectionAndDocuments('categories', SHOP_DATA )
    // }, []);


    const value = { cetegoriesMap };

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )

}
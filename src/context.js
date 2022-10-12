import React, { useContext, useState } from "react";
import { fetchData } from "./utils/fetchLocalStorageData";
const userData=fetchData()
const AppContext=React.createContext()
const AppProvider=({children})=>{
const [isMenu, setIsMenu] = useState(false);
const [user,setUser]=useState(userData)
const[slideItems,setSlideItems]=useState(null)
return<AppContext.Provider value={{user,setUser,isMenu,setIsMenu,slideItems,setSlideItems}}>{children}</AppContext.Provider>
}
export const useGlobalContext=()=>useContext(AppContext)
export { AppProvider, AppContext };


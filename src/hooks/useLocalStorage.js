import { useEffect, useState } from "react";

function useLocalStorage(){    
    const [localStorageData,setlocalStorageData] = useState({})

    const refreshLocalStorageData = ()=>{

        let items = {}
        for (const key in localStorage) {            
            if(localStorage.getItem(key)){                
                items = {...items,[key]:localStorage.getItem(key)}
            }
        }

        setlocalStorageData({...items})
    }

    useEffect(()=>{
        refreshLocalStorageData()
    },[])

    const setLocalStorageItem = (key,value) =>{
        localStorage.setItem(key,value)
        setlocalStorageData({...localStorageData,[key]:localStorage.getItem(key)})
    } 
    
    const removeLocalStorageItem = (key) =>{
        localStorage.removeItem(key)        
        refreshLocalStorageData()
    }

    const getLocalStorageItem = (key)=>{
        if(!localStorageData){
            return null
        }
        if(!localStorageData[key]){
            return null
        }
        return localStorageData[key]
    }

    return {
        localStorageData,
        setLocalStorageItem,
        removeLocalStorageItem,
        getLocalStorageItem
    }
}

export default useLocalStorage
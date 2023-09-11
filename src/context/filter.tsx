import { createContext, useState } from "react";

export const FiltersContext = createContext({});

export const FiltersProvider = ({children}:any) => {
    const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{filter, setFilter}} >
            {children}
        </FiltersContext.Provider>
    )
}
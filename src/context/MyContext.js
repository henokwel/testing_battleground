import { createContext, useContext, useReducer } from "react";
import { data } from "../data";
import { todoReducer } from "../reducer/todoReducer";


export const Context = createContext()
    export const useMyContext = () => useContext(Context);

export function AppWrapper({ children }) {

    const [state, dispatch] = useReducer(todoReducer, data)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )



}

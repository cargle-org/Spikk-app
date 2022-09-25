import { useState } from "react";
import { createContext } from "react";

const SendItemContext = createContext({})

export const SendItemProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [editItem, setEditItem] = useState(
        {
            item : {}
        }
    )
    const [edit, setEdit] = useState(false)
    return <SendItemContext.Provider value={{items, setItems, editItem , setEditItem, edit, setEdit}}>{children}</SendItemContext.Provider>
}

export default SendItemContext
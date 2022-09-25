import { useState } from "react";
import { createContext } from "react";

const ItemContext = createContext({})

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [editItem, setEditItem] = useState(
        {
            item : {}
        }
    )
    const [edit, setEdit] = useState(false)
    return <ItemContext.Provider value={{items, setItems, editItem , setEditItem, edit, setEdit}}>{children}</ItemContext.Provider>
}

export default ItemContext
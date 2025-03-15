import {createContext, useState} from 'react'

export const userContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState(
        {
            name: "Carlos",
            email: "Carlos@gmail.com",
            age:24
        }
    )
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}
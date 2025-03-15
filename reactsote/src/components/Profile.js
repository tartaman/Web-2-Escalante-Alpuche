import { UserContextProvider, userContext } from "../context/user-context";
import { useContext } from "react";


export default function Profile() {
    return (
        <UserContextProvider>
            <ProfileContent/>
        </UserContextProvider>
    )
}

function ProfileContent() {
    const {user} = useContext(userContext)
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}
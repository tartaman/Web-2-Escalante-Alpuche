import MyInput from "./MyInput"
import "../../style/Form.css"
import { userContext, UserContextProvider } from "../../context/user-context"
import { useContext } from "react"
export default function Form() {

    

    return (
        <UserContextProvider>
            <FormContent/>
        </UserContextProvider>
    )

}

function FormContent() {
    const {user, setUser} = useContext(userContext)
    const handleChange = (e) => {
        const{name, value} = e.target;
        setUser((prevUser=>{
            return {
                ...prevUser,
                [name]:value
            }
        }))
    }
    const data = {
        type:"text",
        placeholder:"Enter your name",
        valor:user.name,
        funcion:handleChange,
        name:"name"
     }
     const dataEmail = {
         type:"email",
         placeholder:"Enter your email",
         valor:user.email,
         funcion:handleChange,
         name:"email"
      }
    return ( 
        <form className="myForm">
                <div>
                    <MyInput  {...data}/>
                </div>
                <div>
                    <MyInput  {...dataEmail}/>
                </div>
            </form>
    )
}
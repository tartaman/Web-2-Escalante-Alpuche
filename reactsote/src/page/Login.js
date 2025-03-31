import "../style/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User:", user);
        console.log("Password:", password);
        const dataPass = {
            username: user,
            password: password
        };
        fetchLogin(dataPass, navigate);
    };
    document.querySelector("body").style.backgroundColor = "#0D081C";
    return (
        <div className="containerlogin">
            <h3>Login</h3>
            <form className="formLogin">
                <div>
                    <label htmlFor="username">Correo</label>
                    <input className="login-input" type="text" id="username" name="username" placeholder="Jane Doe" onChange={handleUserChange}/>
                </div>
                <div>
                    <label htmlFor="password">Pass</label>
                    <input className="login-input" type="password" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <div className="login-button-container">
                    <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    )

}

async function fetchLogin(dataPass, navigate) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPass),
    })
    const data = await response.json();
    console.log(data);
    if (!data.accessToken) {
        alert("Usuario o contraseña incorrectos");
        return
    }
    alert("Bienvenido " + data.username);
    localStorage.setItem("token", data.accessToken);
    navigate("/products");
    return data;
}
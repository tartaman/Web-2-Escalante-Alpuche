import "../style/Login.css";
export default function Login() {
    document.querySelector("body").style.backgroundColor = "#0D081C";
    return (
        <div className="containerlogin">
            <h3>Login</h3>
            <form className="formLogin">
                <div>
                    <label htmlFor="username">Correo</label>
                    <input className="login-input" type="text" id="username" name="username" placeholder="Jane Doe"/>
                </div>
                <div>
                    <label htmlFor="password">Pass</label>
                    <input className="login-input" type="password" id="password" name="password" placeholder="Password" />
                </div>
                <div className="login-button-container">
                    <button type="submit" className="login-button">Login</button>
                </div>
            </form>
        </div>
    )

}
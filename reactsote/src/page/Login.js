import "../style/Login.css";
export default function Login() {
    return (
        <div className="containerlogin">
            <h3>Login</h3>
            <form className="formLogin">
                <div>
                    <label htmlFor="username">correo:</label>
                    <input className="login-input" type="text" id="username" name="username" placeholder="Jane Doe"/>
                </div>
                <div>
                    <label htmlFor="password">contraseña:</label>
                    <input className="login-input" type="password" id="password" name="password" placeholder="password" />
                </div>
                <div className="login-button-container">
                    <button type="submit" className="login-button">Login</button>
                </div>
            </form>
        </div>
    )

}
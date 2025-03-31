import { useNavigate } from "react-router-dom";
export default function About() {
    const hasTokenInLocalStorage = localStorage.getItem("token") !== null;
    const navigate = useNavigate();
    if (!hasTokenInLocalStorage) {
        navigate("/login");
    }
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}
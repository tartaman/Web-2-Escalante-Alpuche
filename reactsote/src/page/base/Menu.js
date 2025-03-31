import MyRouters from "../../router/Router";
import {Link, useLocation} from 'react-router-dom'
export default function Menu() {
  const location = useLocation();
  const restringidos = ["/login"];
  const allowed = restringidos.indexOf(location.pathname) === -1
    return (
        <div className="App">
          {allowed &&
            <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
              </ul>
            </nav>
            </header>}
          <MyRouters/>
        </div>
      );
}
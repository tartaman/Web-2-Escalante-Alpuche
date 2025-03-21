import './App.css';
import {Link} from 'react-router-dom';
import MyRouters from './router/Router';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/products">Productos</Link></li>
        </ul>
      </nav>
      </header>
      <MyRouters/>
    </div>
  );
}

export default App;

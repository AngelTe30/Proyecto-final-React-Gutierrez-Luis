import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={Logo} alt="Logo de mi tienda" className="logo" />
                Mi Tienda
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
            <CartWidget/>

        </nav>
    );
};

export default NavBar;
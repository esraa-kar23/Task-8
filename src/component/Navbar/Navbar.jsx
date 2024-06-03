import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-items-one'>
            <a href="#"><img src="../../../public/logo.svg" alt="logo" /></a>
            <span className='Digital' style={{fontSize: "17px", color: "#696969"}}>Digital Marketing Agency</span>
        </div>
        <ul className='nav-items'>
            <li className='es-border'><a className='es-border' href="#">Home</a></li>
            <li className='es-border'><a className='es-border' href="#">Services</a></li>
            <li className='es-border'><a className='es-border'href="#">Portfolio</a></li>
            <li className='es-border'><a className='es-border' href="#">Clients & Partners</a></li>
            <li className='es-border'><a className='es-active'href="#">X Academy</a></li>
            <li className='es-border'><a className='es-border'href="#">About Us</a></li>
            <li className='es-border'><a className='es-border'href="#">Lets Talk</a></li>
        </ul>
        <FontAwesomeIcon className='bars' style={{fontSize: "17px"}} icon={faBars} />
    </nav>
  )
}

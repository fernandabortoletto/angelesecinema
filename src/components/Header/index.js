import './header.css';

import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";


function Header(){
    return(
        <header className='app-header'>
           
            <div className='header-content'>

                <img src={logo} alt="Logo" className='header-logo-img'/>

                <nav className='header-nav'>

                    <Link className='nav-link' to="/">Home</Link>

                    <Link className='favorites-button' to="/favoritos"> 
                    <FaHeart /> Favoritos
                    </Link>

                </nav>

            </div>

            <div className='header-gradient-divider'></div>

        </header>
    )
}

export default Header;
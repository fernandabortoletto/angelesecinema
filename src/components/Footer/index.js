import './footer.css'

import { Link } from 'react-router-dom';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return(
        <footer className='app-footer'>

        <nav className='footer-nav'>
            <Link to="https://www.linkedin.com/in/fer-bortoletto/"> <FaLinkedin className="linkedin" />Fernanda Bortoletto</Link>
            <Link to="https://github.com/fernandabortoletto"> <FaGithub className="github" />fernandabortoletto</Link>
        </nav>
        <div className='footer-detail'>&copy; 2025, angeles&co. cinema. Todos os direitos reservados.</div>
        </footer>
    )
}

export default Footer;
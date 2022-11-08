import { Link } from "react-router-dom";

import coffeeBeansDark from '../../resources/icons/coffee-beans-dark.svg'
import LogoDark from '../../resources/icons/Logo-dark.svg'

const Footer = () => { 
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul className="menu menu_footer">
                    <li className="menu__item">
                            <Link to="/"><img src={LogoDark} alt="logo" className="logo"/>
                            Coffee house</Link>
                        </li>
                        <li className="menu__item"><Link to="/catalog">Our coffee</Link></li>
                        <li className="menu__item"><Link to="/pleasure">For your pleasure</Link></li>
                    </ul>
                </nav>
                <div className="beans-icon beans-icon_dark"><img src={coffeeBeansDark} alt="beans-icon"/></div>
            </div>
        </footer>
    )
}

export default Footer;

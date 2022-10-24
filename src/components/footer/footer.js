import { Link } from "react-router-dom";

const Footer = () => { 
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul className="menu menu_footer">
                    <li className="menu__item">
                            <Link to="/"><img src="./icons/Logo-dark.svg" alt="logo" className="logo"/>
                            Coffee house</Link>
                        </li>
                        <li className="menu__item"><Link to="/catalog">Our coffee</Link></li>
                        <li className="menu__item"><Link to="#">For your pleasure</Link></li>
                    </ul>
                </nav>
                <div className="beans-icon beans-icon_dark"><img src="./icons/coffee-beans-dark.svg" alt="beans-icon"/></div>
            </div>
        </footer>
    )
}

export default Footer;

import { Link } from "react-router-dom";

import Logo from '../../resources/icons/Logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link to="/"><img src={Logo} alt="logo" className="logo"/>
                            Coffee house</Link>
                        </li>
                        <li className="menu__item"><Link to="/catalog">Our coffee</Link></li>
                        <li className="menu__item"><Link to="/pleasure">For your pleasure</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;
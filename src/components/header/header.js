import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link to="/"><img src="../icons/Logo.svg" alt="logo" className="logo"/>
                            Coffee house</Link>
                        </li>
                        <li className="menu__item"><Link to="/catalog">Our coffee</Link></li>
                        <li className="menu__item"><Link to="#">For your pleasure</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;
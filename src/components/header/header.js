
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li className="menu__item">
                            <a href="#"><img src="./icons/Logo.svg" alt="logo" className="logo"/>
                            Coffee house</a>
                        </li>
                        <li className="menu__item"><a href="#OurCoffee">Our coffee</a></li>
                        <li className="menu__item"><a href="#">For your pleasure</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;
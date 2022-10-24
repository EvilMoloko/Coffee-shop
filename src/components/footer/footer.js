
const Footer = () => { 
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul className="menu menu_footer">
                        <li className="menu__item">
                            <img src="./icons/Logo-dark.svg" alt="logo" className="logo"/>
                            Coffee house
                        </li>
                        <li className="menu__item">Our coffee</li>
                        <li className="menu__item">For your pleasure</li>
                    </ul>
                </nav>
                <div className="beans-icon beans-icon_dark"><img src="./icons/coffee-beans-dark.svg" alt="beans-icon"/></div>
            </div>
        </footer>
    )
}

export default Footer;

const ItemCoffeeBig = () => {

    return (
        <section className="coffee-big-item">
            <div className="container">
                <div className="about-beans">
                    <img src="../images/Aromistico_coffee_big.jpg" alt="Aromistico_coffee_big" className="coffee-big-item__img"/>
                    <div className="about-beans__description">
                        <div className="secondary-title">About it</div>
                        <div className="beans-icon beans-icon_dark"><img src="../icons/coffee-beans-dark.svg" alt="beans-icon"/></div>
                        <div className="coffee-big-item__country">
                            Country: <span>Brazil</span>
                        </div>
                        <div className="coffee-big-item__description">
                            Description: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <div className="coffee-big-item__price">
                            Price: <span>12.69$</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemCoffeeBig;
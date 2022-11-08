import coffeeBeansDark from '../../resources/icons/coffee-beans-dark.svg'

const ItemCoffeeBig = ({data}) => {
    
    const {imageBig, description, category, price} = data;

    return (
        <section className="coffee-big-item">
            <div className="container">
                <div className="about-beans">
                    <img src={"../images/" + imageBig} alt="Aromistico_coffee_big" className="coffee-big-item__img"/>
                    <div className="about-beans__description">
                        <div className="secondary-title">About it</div>
                        <div className="beans-icon beans-icon_dark"><img src={coffeeBeansDark} alt="beans-icon"/></div>
                        <div className="coffee-big-item__country">
                            Country: <span>{category}</span>
                        </div>
                        <div className="coffee-big-item__description">
                            Description: <span>{description}</span>
                        </div>
                        <div className="coffee-big-item__price">
                            Price: <span>{price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemCoffeeBig;
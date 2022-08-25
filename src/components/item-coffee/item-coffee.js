

const ItemCoffee = ({name, price, image, category, place}) => {

    const altImage = image.split('.')[0]

    if(place === 'SectionBest') {
        return(
            <div className="best__item">
                <div className="best__item__img">
                    <img src={"./images/" + image} alt={altImage}/>
                </div>
                <div className="best__item__name">{name}</div>
                <div className="best__item__price">{price + '$'}</div>
            </div>
        )
    } 
    if(place === 'SectionCatalog') {
        return (
            <div className="catalog__item">
                <div className="catalog__item__img">
                    <img src={"./images/" + image} alt={altImage}/>
                </div>
                <div className="catalog__item__name">{name}</div>
                <div className="catalog__item__category">{category}</div>
                <div className="catalog__item__price">{price + '$'}</div>
            </div>
        )
    }


}

export default ItemCoffee;
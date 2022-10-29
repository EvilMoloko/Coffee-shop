import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCoffee from "../ItemCoffee/ItemCoffee"



const Catalog = ({data}) => {

    const catalogItems = data.map(item => {
        return (
            <ItemCoffee
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                place='Catalog'
            />
        )

	})

    return(
		<div className="catalog__wrapper">
			{catalogItems}
		</div>

    )
}

export default Catalog;
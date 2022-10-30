import { useSelector } from "react-redux";

import ItemCoffee from "../ItemCoffee/ItemCoffee"




const Catalog = () => {

    const {coffee} = useSelector(state => state);
    const {categoryFilter} = useSelector(state => state);
    const {searchField} = useSelector(state => state);

    const searchCofeee = (data, str) => {
        if (str.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
        })
        
    }

    const itemsFilter = (filter, data) => {
        if(filter !== 'All') {
            return( 
                data.filter(item => {
                    if (filter === item.category) {
                        return item
                    }
                })
            )
        } else {
            return data
        }
    }

    const sortData = searchCofeee(itemsFilter(categoryFilter, coffee), searchField);

    const catalogItems = sortData.map(item => {
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
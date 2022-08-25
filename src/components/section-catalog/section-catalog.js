import ItemCoffee from "../item-coffee/item-coffee"


const SectionCatalog = ({data, onCatalogCategoryClick, onSearchUpdate}) => {

    const catalogItems = data.map(item => {
        return (
            <ItemCoffee
                key={item.id}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                place='SectionCatalog'
            />
        )

	})

    return(
        <section className="catalog">
			<a name="OurCoffee"></a> 
			<div className="container">
				<div className="about-beans">
					<img src="./images/CoffeeGirl.png" alt="Coffee_Girl" className="about-bens__img"/>
					<div className="about-beans__description">
						<div className="secondary-title">About our beans</div>
						<div className="beans-icon beans-icon_dark"><img src="./icons/coffee-beans-dark.svg" alt="beans-icon"/></div>
						<div className="about-beans__text">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							<br/><br/>
							Afraid at highly months do things on at. Situation <br/> recommend objection do intention <br/>
							so questions. 
							As greatly removed calling pleased improve an. <br/> Last ask him cold feel <br/>
							met spot shy want. Children me laughing we <br/> prospect answered followed. At it went <br/>
							is song that held help face.
						</div>
					</div>
				</div>
				<hr className="catalog__line"/>
				<div className="sort">
					<div className="search">
						<label htmlFor="searchField">Looking for</label>
						<input 
							name="searchField" 
							id="searchField" 
							type="text" 
							placeholder="start typing here..."
							onChange={(e) => {onSearchUpdate(e.currentTarget.value)}}/>
					</div>
					<div className="filter">
						<span>Or filter</span>
						<div className="filter__wrapper">
							<div className="filter__item" 
								onClick={(e) =>{onCatalogCategoryClick(e.currentTarget)}}>Brazil</div>
							<div className="filter__item" 
								onClick={(e) =>{onCatalogCategoryClick(e.currentTarget)}}>Kenya</div>
							<div className="filter__item" 
								onClick={(e) =>{onCatalogCategoryClick(e.currentTarget)}}>Columbia</div>
						</div>
					</div>
				</div>
				<div className="catalog__wrapper">
					{catalogItems}
				</div>
			</div>
		</section>
    )
}

export default SectionCatalog;
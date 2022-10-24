import ItemCoffee from "../ItemCoffee/ItemCoffee";

const SectionBest = ({data}) => {

	const bestItems = data.map(item => {
		if (item.best) {
			return (
				<ItemCoffee
					key={item.id}
					image={item.image}
					name={item.name}
					price={item.price}
					best={item.best}
					place='SectionBest'
				/>
			)
		}
	}) 

	return(
		<section className="best">
		<div className="container">
			<h2 className="secondary-title secondary-title_dark">Our Best</h2>
			<div className="best-wrapper">
				{bestItems}
			</div>
		</div>
	</section>
	)
}

export default SectionBest;
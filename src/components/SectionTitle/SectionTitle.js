import { Link } from "react-router-dom";

const SectionTitle = () => {
	return (
		<section className="sec-title">
			<div className="container">
				<h1 className="title-main">Everything You Love About Coffee</h1>
				<div className="beans-icon"><img src="./icons/coffee-beans.svg" alt="beans-icon"/></div>
				<h2 className="secondary-title">We makes every day full of energy and taste</h2>
				<h2 className="secondary-title secondary-title_shadow">Want to try our beans?</h2>
				<Link to="/catalog"><button className="btn-more">More</button></Link>
			</div>
		</section>
	)
};

export default SectionTitle;
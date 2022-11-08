import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Catalog from '../Catalog/Catalog';
import CoffeeSort from '../CoffeeSort/CoffeeSort';

import CoffeeGirl from '../../resources/img/CoffeeGirl.png'
import coffeeBeansDark from '../../resources/icons/coffee-beans-dark.svg'

const OurCoffeePage = () => {
        return(
            <>
                <Header/>
                <section className="sec-title-our-coffee">
                    <div className="container">
                        <h1 className="title-our-coffee">Our Coffee</h1>
                    </div>
                </section>
                <section className="catalog">
                    <div className="container">
                        <div className="about-beans">
                            <img src={CoffeeGirl} alt="Coffee_Girl" className="about-bens__img"/>
                            <div className="about-beans__description">
                                <div className="secondary-title">About our beans</div>
                                <div className="beans-icon beans-icon_dark"><img src={coffeeBeansDark} alt="beans-icon"/></div>
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
                        <CoffeeSort 
                            activeClass={'filter__item_active'}/>
                        <Catalog/>
                    </div>
                </section>

                <Footer/>
            </>
        )
}

export default OurCoffeePage;
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Catalog from '../Catalog/Catalog';

import coffeeBeansDark from '../../resources/icons/coffee-beans-dark.svg'
import CoffeeCup from '../../resources/img/Coffee_cup.jpg'

const ForYourPleasurePage = () => {

        return(
            <>
                <Header/>
                <section className="sec-title-pleasure">
                    <div className="container">
                        <h1 className="title-our-coffee">For Your Pleasure</h1>
                    </div>
                </section>
                <section className="catalog">
                    <div className="container">
                        <div className="about-beans">
                            <img src={CoffeeCup} alt="Coffee_cup" className="about-bens__img"/>
                            <div className="about-beans__description">
                                <div className="secondary-title">About our goods</div>
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
                        <Catalog/>
                    </div>
                </section>
                <Footer/>
            </>
        )
}

export default ForYourPleasurePage;
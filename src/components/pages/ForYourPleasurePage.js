import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Catalog from '../Catalog/Catalog';
import CoffeeSort from '../CoffeeSort/CoffeeSort';




const ForYourPleasurePage = () => {

    const [data, setData] = useState([
        {name: 'Solimo Coffee Beans 2 kg', image: 'Solimo_Coffee.jpg', price: 10.73, category: 'Brazil', rate: 8.0, id: 1},
        {name: 'Presto Coffee Beans 1 kg', image: 'Presto_Coffee.png', price: 15.99, category: 'Kenya', rate: 9.0, id: 2},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Columbia', rate: 8.7, id: 3},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Brazil', rate: 6.7, id: 4},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 10.73, category: 'Kenya', rate: 7.0, id: 5},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 15.99, category: 'Columbia', rate: 7.8, id: 6},
    ]);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [searchField, setSearchField] = useState('');
    

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


        const sortData = searchCofeee(itemsFilter(categoryFilter, data), searchField);
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
                            <img src="./images/Coffee_cup.jpg" alt="Coffee_cup" className="about-bens__img"/>
                            <div className="about-beans__description">
                                <div className="secondary-title">About our goods</div>
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
                        <Catalog
                           data={sortData} />
                    </div>
                </section>
                <Footer/>
            </>
        )
}

export default ForYourPleasurePage;
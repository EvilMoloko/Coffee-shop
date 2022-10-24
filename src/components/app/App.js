import { useState } from 'react';
import '../../fonts.css'
import '../../style.sass'
import '../../App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionBest from '../SectionBest/SectionBest';
import SectionCatalog from '../SectionCatalog/SectionCatalog';



const App = () => {

    const [data, setData] = useState([
        {name: 'Solimo Coffee Beans 2 kg', image: 'Solimo_Coffee.jpg', price: 10.73, category: 'Brazil', best: true, id: 1},
        {name: 'Presto Coffee Beans 1 kg', image: 'Presto_Coffee.png', price: 15.99, category: 'Kenya', best: true, id: 2},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Columbia', best: true, id: 3},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Brazil', best: false, id: 4},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 10.73, category: 'Kenya', best: false, id: 5},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 15.99, category: 'Columbia', best: false, id: 6},
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

    const onCatalogCategoryClick = (e) => {
        if (categoryFilter === e.innerHTML) {
            setCategoryFilter('All');
        } else {
            setCategoryFilter(e.innerHTML);
        }
        document.querySelectorAll('.'+ e.classList).forEach(el => {
            el.classList.remove('filter__item_active')
        })
        e.classList.toggle('filter__item_active')
    }

        const sortData = searchCofeee(itemsFilter(categoryFilter, data), searchField);
        return(
            <>
                <Header/>
                <SectionTitle/>
                <SectionAbout/>
                <SectionBest data={data}/>
                <SectionCatalog
                    data={sortData}
                    onCatalogCategoryClick={onCatalogCategoryClick}
                    onSearchUpdate={setSearchField}/>
                <Footer/>
            </>
        )
}

export default App;

import { Component } from 'react';

import '../../fonts.css'
import '../../style.sass'
import '../../App.css';

import header from '../header/header';
import footer from '../footer/footer';
import sectionTitle from '../section-title/section-title';
import sectionAbout from '../section-about/section-about';
import SectionBest from '../section-best/section-best';
import SectionCatalog from '../section-catalog/section-catalog';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Solimo Coffee Beans 2 kg', image: 'Solimo_Coffee.jpg', price: 10.73, category: 'Brazil', best: true, id: 1},
                {name: 'Presto Coffee Beans 1 kg', image: 'Presto_Coffee.png', price: 15.99, category: 'Kenya', best: true, id: 2},
                {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Columbia', best: true, id: 3},
                {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Brazil', best: false, id: 4},
                {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 10.73, category: 'Kenya', best: false, id: 5},
                {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 15.99, category: 'Columbia', best: false, id: 6},
            ],
            categoryFilter: 'All',
            searchField: ''
        }
    }

    searchCofeee = (data, str) => {
        if (str.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
        })
        
    }

    onSearchUpdate = (str) => {
        this.setState({searchField: str})
    }

    itemsFilter = (filter, data) => {
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

    onCatalogCategoryClick = (e) => {
        if (this.state.categoryFilter === e.innerHTML) {
            this.setState({
                categoryFilter: 'All'
            })
        } else {
            this.setState({
                categoryFilter: e.innerHTML
            })
        }
        document.querySelectorAll('.'+ e.classList).forEach(el => {
            el.classList.remove('filter__item_active')
        })
        e.classList.toggle('filter__item_active')
    }

    render() {
        const {data, categoryFilter, searchField} = this.state;
        const sortData = this.searchCofeee(this.itemsFilter(categoryFilter, data), searchField);
        return(
            [header,
            sectionTitle,
            sectionAbout,
            <SectionBest
                data={data}/>,
            <SectionCatalog
                data={sortData}
                onCatalogCategoryClick={this.onCatalogCategoryClick}
                onSearchUpdate={this.onSearchUpdate}/>,
            footer]
        )
    }
}

export default App;

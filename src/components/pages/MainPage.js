import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionBest from '../SectionBest/SectionBest';

import { useDispatch, useSelector } from 'react-redux';
import { categoryFilterChanged } from '../../actions';


const MainPage = () => {
    const {coffee} = useSelector(state => state)
    const {categoryFilter} = useSelector(state => state)
    const {searchField} = useSelector(state => state)

    const dispatch = useDispatch();
    

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
            dispatch(categoryFilterChanged('All'));
        } else {
            dispatch(categoryFilterChanged(e.innerHTML));
        }
        document.querySelectorAll('.'+ e.classList).forEach(el => {
            el.classList.remove('filter__item_active')
        })
        e.classList.toggle('filter__item_active')
    }

        const sortData = searchCofeee(itemsFilter(categoryFilter, coffee), searchField);
        return(
            <>
                <Header/>
                <SectionTitle/>
                <SectionAbout/>
                <SectionBest data={sortData}/>
                <Footer/>
            </>
        )
};

export default MainPage;
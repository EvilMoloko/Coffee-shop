import { useState } from "react";

const CoffeeSort = ({activeClass}) => {

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
    const onCatalogCategoryClick = (e) => {
        if (categoryFilter === e.innerHTML) {
            setCategoryFilter('All');
        } else {
            setCategoryFilter(e.innerHTML);
        }

        Array.from(e.parentElement.children).forEach(el => {
            el.classList.remove(activeClass)
        })
        // document.querySelectorAll('.'+ e.classList).forEach(el => {
        //     el.classList.remove('filter__item_active')
        // })

        e.classList.toggle(activeClass)
    }

    return (
        <div className="sort">
            <div className="search">
                <label htmlFor="searchField">Looking for</label>
                <input 
                    name="searchField" 
                    id="searchField" 
                    type="text" 
                    placeholder="start typing here..."
                    onChange={(e) => {setSearchField(e.currentTarget.value)}}/>
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
    )
}

export default CoffeeSort;
import { useSelector, useDispatch } from "react-redux";

import { categoryFilterChanged, searchFieldChanged } from "../../actions";

const CoffeeSort = ({activeClass}) => {

    const {categoryFilter} = useSelector(state => state);

    const dispatch = useDispatch();

    const onCatalogCategoryClick = (e) => {
        if (categoryFilter === e.innerHTML) {
            dispatch(categoryFilterChanged('All'));
        } else {
            dispatch(categoryFilterChanged(e.innerHTML));
        }

        document.querySelectorAll('.'+ e.classList).forEach(el => {
            el.classList.remove(activeClass)
        })

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
                    onChange={(e) => {dispatch(searchFieldChanged(e.currentTarget.value))}}/>
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
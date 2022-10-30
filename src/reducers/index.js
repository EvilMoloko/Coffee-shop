import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coffee: [
        {name: 'Solimo Coffee Beans 2 kg',
         image: 'Solimo_Coffee.jpg',
         imageBig: 'Solimo_Coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 10.73, category: 'Brazil',
         rate: 8.0,
         id: 1},
        {name: 'Presto Coffee Beans 1 kg',
         image: 'Presto_Coffee.png',
         imageBig: 'Presto_Coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 15.99, category: 'Kenya',
         rate: 9.0,
         id: 2},
        {name: 'AROMISTICO Coffee 1 kg',
         image: 'Aromistico_coffee.jpg',
         imageBig: 'Aromistico_coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 6.99, category: 'Columbia',
         rate: 8.7,
         id: 3},
        {name: 'AROMISTICO Coffee 1 kg',
         image: 'Aromistico_coffee.jpg',
         imageBig: 'Aromistico_coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 6.99, category: 'Brazil',
         rate: 6.7,
         id: 4},
        {name: 'AROMISTICO Coffee 1 kg',
         image: 'Aromistico_coffee.jpg',
         imageBig: 'Aromistico_coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 10.73, category: 'Kenya',
         rate: 7.0,
         id: 5},
        {name: 'AROMISTICO Coffee 1 kg',
         image: 'Aromistico_coffee.jpg',
         imageBig: 'Aromistico_coffee_big.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         price: 15.99, category: 'Columbia',
         rate: 7.8,
         id: 6},
    ],
    sortCoffee: [],
    categoryFilter: 'All',
    searchField: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "COFFEE_SORTED":
            return {
                ...state,
                sortCoffee: action.payload
            }
        case "CATEGORY_FILTER_CHANGED":
            return {
                ...state,
                categoryFilter: action.payload
            }
        case "SEARCH_FIELD_CHANGED":
            return {
                ...state,
                searchField: action.payload
            }
        default: return state
    }
}

export default reducer;
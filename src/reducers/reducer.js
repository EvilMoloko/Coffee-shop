import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coffee: [
        {name: 'Solimo Coffee Beans 2 kg', image: 'Solimo_Coffee.jpg', price: 10.73, category: 'Brazil', rate: 8.0, id: 1},
        {name: 'Presto Coffee Beans 1 kg', image: 'Presto_Coffee.png', price: 15.99, category: 'Kenya', rate: 9.0, id: 2},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Columbia', rate: 8.7, id: 3},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 6.99, category: 'Brazil', rate: 6.7, id: 4},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 10.73, category: 'Kenya', rate: 7.0, id: 5},
        {name: 'AROMISTICO Coffee 1 kg', image: 'Aromistico_coffee.jpg', price: 15.99, category: 'Columbia', rate: 7.8, id: 6},
    ]
}


const reducer = (state = initialState) => {
    
    return state;
}

export default reducer;
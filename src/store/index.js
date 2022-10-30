import configureStore from '@reduxjs/toolkit';
import reducer from '../reducers/index';
import { createStore } from 'redux';
import { compose } from 'redux';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
}

// const store = configureStore({
//     reducer: {coffee: coffee},
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
//     devTools: process.env.NODE_ENV !== 'production',
    
// })

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;

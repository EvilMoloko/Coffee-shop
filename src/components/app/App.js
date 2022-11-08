import { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import '../../fonts.css';
import '../../style.sass';

import ScrollToTop from '../ScrollToTop/ScrollToTop';

const MainPage = lazy(() => import('../pages/MainPage'));
const OurCoffeePage = lazy(() => import('../pages/OurCoffeePage'));
const SingleCoffeePage = lazy(() => import('../pages/SingleCoffeePage'));
const ForYourPleasurePage = lazy(() => import('../pages/ForYourPleasurePage'));



const App = () => {

        return(
            <Router>
                <ScrollToTop/>
                <Suspense>
                    <Routes>
                        <Route exact path='/' element={<MainPage/>}/>
                        <Route exact path='/catalog' element={<OurCoffeePage/>}/>
                        <Route exact path='/catalog/:id' element={<SingleCoffeePage/>}/>
                        <Route exact path='/pleasure' element={<ForYourPleasurePage/>}/>
                    </Routes>
                </Suspense>
            </Router>
        )
}

export default App;

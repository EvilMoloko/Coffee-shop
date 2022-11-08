import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionBest from '../SectionBest/SectionBest';

import { useSelector } from 'react-redux';

const MainPage = () => {

    const {coffee} = useSelector(state => state)

        return(
            <>
                <Header/>
                <SectionTitle/>
                <SectionAbout/>
                <SectionBest data={coffee}/>
                <Footer/>
            </>
        )
};

export default MainPage;
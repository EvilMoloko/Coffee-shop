import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemCoffeeBig from "../ItemCoffeeBig/ItemCoffeeBig";


const SingleCoffeePage = () => {


    return (
        <>
            <Header/>
            <section className="sec-title-our-coffee">
                <div className="container">
                    <h1 className="title-our-coffee">Our Coffee</h1>
                </div>
            </section>
            <ItemCoffeeBig/>
            <Footer/>
        </>
    )
}

export default SingleCoffeePage;
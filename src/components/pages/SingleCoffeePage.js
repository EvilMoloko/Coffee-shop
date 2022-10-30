import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemCoffeeBig from "../ItemCoffeeBig/ItemCoffeeBig";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const SingleCoffeePage = () => {
    const {id} = useParams();
    const {coffee} = useSelector(state => state);
    const currentCoffee = coffee.filter(item => {
        return item.id == id
    })[0];
    console.log(currentCoffee)

    return (
        <>
            <Header/>
            <section className="sec-title-our-coffee">
                <div className="container">
                    <h1 className="title-our-coffee">Our Coffee</h1>
                </div>
            </section>
            <ItemCoffeeBig data={currentCoffee}/>
            <Footer/>
        </>
    )
}

export default SingleCoffeePage;
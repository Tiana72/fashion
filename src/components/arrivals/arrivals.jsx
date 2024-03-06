import './arrivals.css';
import card1 from './../../img/categories/cat-01.jpg';
import card2 from './../../img/categories/cat-02.jpg';
import card3 from './../../img/categories/cat-03.jpg';
import Card from '../card/card';

const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <h2 className="title-2">NEW ARRIVALS</h2>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" image={card1} />
                    <Card title="Coats & Parkas" image={card2} />
                    <Card title="Tees & T-Shirt" image={card3} />
                </div>
                
            </div>
        </section>
    );
}

export default Arrivals;
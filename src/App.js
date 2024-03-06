import Arrivals from "./components/arrivals/arrivals";
import Brands from "./components/brands/brands";
import Header from "./components/header/header";
import Promo from "./components/promo/promo";

function App() {
    return (
        <div className="App">
            <Header />
            <Promo />
            <Brands />
            <Arrivals />
        </div>
    );
}

export default App;

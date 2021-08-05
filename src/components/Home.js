import "./Home.css";
import Products from "./Products";

const backgroundImage =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/July/Headsets/OnePlusBudsPro/Intrigue/Ingress/P50167046_ConfidentialWLA_OnePlus_Buds_Pro_Tall_hero_1500x600._CB663475496_.jpg";
const Home = ({ getCart }) => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={backgroundImage} />
        <div className="home__productsList">
          <Products getCart={getCart} />
        </div>
      </div>
    </div>
  );
};

export default Home;

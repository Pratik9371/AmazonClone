import SearchIcon from "@material-ui/icons/Search";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* <div className="header__userAddrress">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">Select your address</span>
      </div> */}
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search any product"
        />
        <div className="header_searchIcon">
          <SearchIcon />
        </div>
      </div>
      {/* <div className="header__search input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn header__searchbtn" type="submit">
            <SearchIcon />
          </button>
        </div>
      </div> */}
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Sign in</span>
            <span className="header__optionLineTwo">Guest</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__cart">
          <Cart />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

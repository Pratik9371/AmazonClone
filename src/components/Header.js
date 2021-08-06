import SearchIcon from "@material-ui/icons/Search";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../actions";

const Header = () => {
  const user = useSelector((state) => state.user.name);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const count = useSelector((state) => state.count);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    axios
      .post(`https://localhost:44330/api/products/search?value=${inputValue}`)
      .then((res) => {
        dispatch(setProducts(res.data));
      });
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search any product"
          onChange={handleSearchChange}
          value={inputValue}
        />
        <div className="header_searchIcon">
          <SearchIcon onClick={handleSearch} />
        </div>
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello, {isLoggedIn ? null : "Sign in"}
            </span>
            <span className="header__optionLineTwo">
              {isLoggedIn ? user : "Guest"}
            </span>
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
        <Link to="/cart" style={{ color: "white" }}>
          <div className="header__cart">
            <Cart />
            <span>{count}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

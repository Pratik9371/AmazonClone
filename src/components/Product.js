import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading } from "../actions";

const Product = ({ id, name, price, rating, imageUrl, getCart }) => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userId = useSelector((state) => state.user.id);
  const isLoading = useSelector((state) => state.loading);

  const addToCart = () => {
    if (isLoggedIn) {
      const payload = {
        userID: userId,
        productID: id,
      };
      axios
        .post("https://localhost:44330/api/cart/add", payload)
        .then((res) => {
          alert("successfully added to cart");
          getCart();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("You need to login first");
      history.push("/login");
    }
  };
  return (
    <div className="product">
      <img src={imageUrl} className="product__image" />
      <div className="product__info">
        <h6 className="product__name">{name}</h6>
        <div className="product_rating">
          <StarIcon fontSize="small" className="product__ratingIcon" />
          <StarIcon fontSize="small" className="product__ratingIcon" />
          <StarIcon fontSize="small" className="product__ratingIcon" />
          <StarIcon fontSize="small" className="product__ratingIcon" />
        </div>
        <div className="product__price">
          <span className="font-weight-bold">₹{price}</span>
        </div>
      </div>

      <button type="button" className="product__cartbtn" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;

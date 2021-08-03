import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";

const Product = ({ name, price, rating, imageUrl }) => {
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

      <button type="button" className="product__cartbtn">
        Add to cart
      </button>
    </div>
  );
};

export default Product;

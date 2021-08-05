import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { useDispatch } from "react-redux";
import { setCount } from "../actions";

const ShoppingCart = () => {
  const userId = useSelector((state) => state.user.id);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {userId == undefined || !cart.length ? (
        <div className="cart__container">
          <h5>Your cart is empty</h5>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div className="cart__container" key={index}>
              <img className="cart__image" src={item.product.imageUrl} />
              <div className="cart__info">
                <div className="cart__header">
                  <h5>{item.product.name}</h5>
                  <h5>₹{item.product.price}</h5>
                </div>
                <div className="cart__body">
                  <p>All Information</p>
                </div>
                <div className="cart__footer">
                  <h5>Quantity</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { useDispatch } from "react-redux";
import { setCount, setCart } from "../actions";

const ShoppingCart = ({ getCart }) => {
  const user = useSelector((state) => state.user.id);
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:44330/api/cart/remove?id=${id}`)
      .then((res) => {
        alert("Item successfully removed");
        getCart();
      })
      .catch((error) => console.log(error.message));
  };

  const getTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.product.price;
    });
    setTotal(total);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  const handleQuantityChange = (qty, item) => {
    const obj = {
      ...item,
      quantity: parseInt(qty),
    };

    axios.put("https://localhost:44330/api/cart/update", obj).then((res) => {
      getCart();
    });
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {user == undefined || !cart.length ? (
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
                  <h5>₹{item.product.price.toLocaleString()}</h5>
                </div>
                <div className="cart__body">
                  <p>Eligible for free shipping</p>
                </div>
                <div className="cart__footer">
                  <select
                    name="Quantity"
                    className="cart__select"
                    onChange={(e) => handleQuantityChange(e.target.value, item)}
                    value={item.quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <a href="#" onClick={() => handleDelete(item.id)}>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="cart__total">
            <h5>{`Subtotal (${
              cart.length
            } items): ${total.toLocaleString()}`}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

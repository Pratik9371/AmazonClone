import "./Checkout.css";
import axios from "axios";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { setCart, setCount, setLoading } from "../actions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Checkout = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const [orderDetails, setOrderDetails] = useState([]);
  const history = useHistory();

  const deleteCart = () => {
    axios.delete(`https://localhost:44330/api/cart/delete?id=${user.id}`);
  };

  useEffect(() => {
    const orderDetailsArray =
      cart.length &&
      cart.map((item) => {
        return {
          productId: item.productID,
          quantity: item.quantity,
        };
      });

    setOrderDetails(orderDetailsArray);
  }, [cart]);

  const handleSubmit = () => {
    const dataObj = {
      userID: user.id,
      orderDetails: orderDetails,
      total: total,
    };
    dispatch(setLoading(true));
    axios
      .post("https://localhost:44330/api/orders/add", dataObj)
      .then((res) => {
        deleteCart();
        dispatch(setCart(res.data));
        dispatch(setCount(res.data.length));
        swal("Order placed", "Thank you for ordering", "success");
        dispatch(setLoading(false));
        history.push("/");
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: "Error while placing your order",
          icon: "error",
        });
        dispatch(setLoading(false));
        console.log(error.message);
      });
  };

  return (
    <div className="checkout">
      <h2 className="checkout__heading">
        Checkout <span style={{ fontWeight: "400" }}>({count} items)</span>
      </h2>
      <div className="checkout__row">
        <div className="checkout__left">
          <div className="checkout__deliveryAddress">
            <h5 className="checkout__title">Delivery Address</h5>
            <p>{user.address}</p>
          </div>
          <div className="checkout__cart">
            <h5 className="checkout__title">Review items to be delivered</h5>
            <div className="checkout__items">
              {cart.length > 0 &&
                cart.map((item, index) => (
                  <div className="checkout__item" key={index}>
                    <img
                      className="checkout__itemImage"
                      src={item.product.imageUrl}
                    />
                    <div className="checkout__itemInfo">
                      <h5>{item.product.name}</h5>
                      <h5>₹{item.product.price.toLocaleString()}</h5>
                      <h5>Quantity - {item.quantity}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="checkout__payment">
            <h5 className="checkout__title">Payment methods</h5>
            <div className="checkout__paymentMethods">COD</div>
          </div>
        </div>
        <div className="checkout__right">
          <div className="checkout__placeOrder">
            <button className="checkout__placeOrderBtn" onClick={handleSubmit}>
              Place your order
            </button>
          </div>

          <div className="checkout__orderInfo">
            <h3>Order Summary</h3>
            <div className="checkout__totalItems">
              <h5>Total items</h5>
              <p>{count}</p>
            </div>
            <div className="checkout__total">
              <h5>Total</h5>
              <p>₹ {total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

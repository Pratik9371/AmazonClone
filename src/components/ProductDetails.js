import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import StarIcon from "@material-ui/icons/Star";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import swal from "sweetalert";

const ProductDetails = ({ getCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get("id");
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const userId = useSelector((state) => state.user.id);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://localhost:44330/api/products/get?id=${productId}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  const handleQuantityChange = (e) => {
    setQty(e.target.value);
  };

  const addToCart = () => {
    if (userId) {
      const dataObj = {
        userID: userId,
        quantity: parseInt(qty),
        productID: parseInt(productId),
      };
      axios
        .post("https://localhost:44330/api/cart/add", dataObj)
        .then((res) => {
          swal("Successfully added to cart");
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
    <div className="productdetails">
      <div className="productdetails__product">
        <img src={product.imageUrl} className="productdetails__image" />
        <div className="productdetails__info">
          <h5>{product.name}</h5>
          <div className="product__rating">
            <StarIcon fontSize="small" className="product__ratingIcon" />
            <StarIcon fontSize="small" className="product__ratingIcon" />
            <StarIcon fontSize="small" className="product__ratingIcon" />
            <StarIcon fontSize="small" className="product__ratingIcon" />
          </div>
          <h5>₹{product.price}</h5>
          <select
            name="Quantity"
            className="productdetails__select"
            onChange={handleQuantityChange}
            value={qty}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button
            type="button"
            className="productdetails__button"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="productdetails__about">
        <h4>About this item</h4>
        <ul>
          {product.productDetails &&
            product.productDetails.map((item, index) => (
              <li key={index}>{item.detail}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

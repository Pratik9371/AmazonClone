import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/91dLTREdG1L._AC_UL160_SR160,160_.jpg"
        className="product__image"
      />
      <h6 className="product__name">
        Samsung Galaxy S21 Ultra 5G (Phantom Silver, 12GB, 256GB Storage) +
        Galaxy Buds Pro @990
      </h6>
      <div className="product_rating">
        <StarIcon fontSize="small" className="product__ratingIcon" />
        <StarIcon fontSize="small" className="product__ratingIcon" />
        <StarIcon fontSize="small" className="product__ratingIcon" />
        <StarIcon fontSize="small" className="product__ratingIcon" />
      </div>
      <div className="product__price">
        <span className="font-weight-bold">₹1,05,999.00</span>
      </div>
      <button type="button" className="product__cartbtn">
        Add to cart
      </button>
    </div>
  );
};

export default Product;

import Product from "./Product";
import "./Products.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useState, useEffect } from "react";
import { setProducts } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = ({ getCart }) => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    axios.get("https://localhost:44330/api/products/getall").then((res) => {
      // setProducts(res.data);
      dispatch(setProducts(res.data));
    });
  }, []);

  return (
    <Grid container className="products">
      {products.map((product, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          className="product__container"
          key={index}
        >
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            imageUrl={product.imageUrl}
            getCart={getCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

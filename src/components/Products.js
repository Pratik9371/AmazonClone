import Product from "./Product";
import "./Products.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:44330/api/products/get").then((res) => {
      setProducts(res.data);
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
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

import Product from "./Product";
import "./Products.css";
import Grid from "@material-ui/core/Grid";

const Products = () => {
  return (
    <Grid container className="products">
      <Grid item xs={12} sm={4} lg={3} className="product__container">
        <Product />
      </Grid>
      <Grid item xs={12} sm={4} lg={3} className="product__container">
        <Product />
      </Grid>
      <Grid item xs={12} sm={4} lg={3} className="product__container">
        <Product />
      </Grid>
      <Grid item xs={12} sm={4} lg={3} className="product__container">
        <Product />
      </Grid>
    </Grid>
  );
};

export default Products;

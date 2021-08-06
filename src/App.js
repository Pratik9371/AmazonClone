import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart, setCount } from "./actions";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    getCart();
  }, [userId]);

  const getCart = () => {
    if (userId) {
      axios
        .get(`https://localhost:44330/api/cart/get?userId=${userId}`)
        .then((res) => {
          dispatch(setCart(res.data));
          dispatch(setCount(res.data.length));
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <Router>
      <div className="App">
        {isLoading == true ? <LinearProgress /> : null}
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home getCart={getCart} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/cart">
            <Header />
            <ShoppingCart getCart={getCart} />
          </Route>
          <Route path="/productdetails">
            <Header />
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

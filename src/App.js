import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const App = () => {
  const isLoading = useSelector((state) => state.loading);

  return (
    <Router>
      <div className="App">
        {isLoading == true ? <LinearProgress /> : null}
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

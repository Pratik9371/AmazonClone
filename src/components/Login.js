import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button type="button" className="login__signInButton">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#">Privacy Notice.</a>
          </p>
          <p>New to Amazon?</p>
          <Link to="/signup">
            <button type="button" className="login__signUpButton">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

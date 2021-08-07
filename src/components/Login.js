import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setLoading, setUser, setIsLoggedIn } from "../actions";

const url = "https://localhost:44330/api/user/login";

const initialState = {
  emailError: "",
  passwordError: "",
};

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialState);
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
      dispatch(setLoading(true));
      const payload = {
        email,
        password,
      };

      //api call...
      axios
        .post(url, payload)
        .then((res) => {
          if (res.data) {
            dispatch(setIsLoggedIn(true));
            dispatch(
              setUser({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                address: res.data.address,
              })
            );
            // const sessionData = {
            //   user: res.data.name,
            // };
            // window.sessionStorage.setItem("user", JSON.stringify(sessionData));
            history.push("/");
            dispatch(setLoading(false));
          } else {
            setLoginError("Incorrect email or password");
            history.push("/login");
            dispatch(setLoading(false));
          }
        })
        .catch((error) => {
          dispatch(setLoading(false));
          console.log(error.message);
        });
    }
  };

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (email === "") {
      emailError = "Email cannot be empty";
    }

    if (password === "") {
      passwordError = "Password cannot be empty";
    }

    if (emailError || passwordError) {
      setError({ emailError, passwordError });
      return false;
    }
    return true;
  };

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
        <div style={{ color: "red" }}>{loginError}</div>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" onChange={handleEmailChange} />
          <div style={{ color: "red" }}>{error.emailError}</div>
          <h5>Password</h5>
          <input type="password" onChange={handlePasswordChange} />
          <div style={{ color: "red" }}>{error.passwordError}</div>
          <button
            type="button"
            className="login__signInButton"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#">Privacy Notice.</a>
          </p>
          <p>New to Amazon?</p>
          <Link to="/signup">
            <button type="submit" className="login__signUpButton">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>

      <Link to="/" className="login__goback">
        Go to home page
      </Link>
    </div>
  );
};

export default Login;

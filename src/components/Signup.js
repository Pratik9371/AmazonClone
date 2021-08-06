import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../actions/index";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const url = "https://localhost:44330/api/user/createuser";

const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
    emailError: "",
  });

  const handleChange = (e, name) => {
    const value = e.target.value;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const isValid = validate();
    if (isValid) {
      dispatch(setLoading(true));
      axios
        .post(url, formData)
        .then((res) => {
          dispatch(setLoading(false));
          history.push("/");
        })
        .catch((error) => {
          dispatch(setLoading(false));
          console.log(error.message);
        });
    }
  };

  const validate = () => {
    let nameError = "";
    let passwordError = "";
    let emailError = "";

    if (formData.name === "") {
      nameError = "Name cannot be empty";
    } else if (formData.name.length < 4) {
      nameError = "Name must be of alteast 4 characters";
    }

    if (formData.email === "") {
      emailError = "Email cannot be empty";
    }

    if (formData.password === "") {
      passwordError = "Password cannot be empty";
    } else if (formData.password.length < 5) {
      passwordError = "Password must be greater than 4 characters";
    }

    if (nameError || passwordError || emailError) {
      setErrors({ nameError, passwordError, emailError });
      return false;
    }
    return true;
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="logo"
          className="signup__logo"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form>
          <h5>Your Name</h5>
          <input
            type="text"
            onChange={(e) => handleChange(e, "name")}
            value={formData.name}
          />
          <div style={{ color: "red" }}>{errors.nameError}</div>
          <h5>Email</h5>
          <input
            type="email"
            onChange={(e) => handleChange(e, "email")}
            value={formData.email}
          />
          <div style={{ color: "red" }}>{errors.emailError}</div>
          <h5>Password</h5>
          <input
            type="Password"
            onChange={(e) => handleChange(e, "password")}
            value={formData.password}
          />
          <div style={{ color: "red" }}>{errors.passwordError}</div>
          <button
            className="signup__signUpButton"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

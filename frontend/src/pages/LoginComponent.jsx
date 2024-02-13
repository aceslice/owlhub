import { useState } from "react";
import "../assets/css/auth/auth.css";

const LoginComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    sendRequest();
  }
  function handleInput(type) {
    return (event) => {
      if (type === "email") {
        setEmail(event.target.value);
      } else {
        setPassword(event.target.value);
      }
    };
  }
  function sendRequest() {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="container">
      <div className="auth-container">
        <h1>Welcome back!</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            onChange={handleInput("email")}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={handleInput("password")}
          />
          <a href="/login" style={{ textAlign: "end" }}>
            Forgot password?
          </a>
        </form>
        <div className="actions">
          <button className="primary-button" id="login" form="login-form">
            Lets go!
          </button>
        </div>
        <p>
          Create new account? <a href="/signup">Create account</a>
        </p>
      </div>
    </div>
  );
};
export default LoginComponent;

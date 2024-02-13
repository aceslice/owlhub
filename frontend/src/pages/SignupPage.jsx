import { useState } from "react";
import "../assets/css/auth/auth.css";
const SignupPage = () => {
  function checkPassword() {
    // Get the trimmed values of password and confirm password
    const passwordValue = password.value.trim();
    const confPasswordValue = confPassword.value.trim();

    // Check if either password or confirm password is empty
    if (passwordValue === "" || confPasswordValue === "") {
      passwordError.textContent = "Passwords cannot be empty!";
    } else if (passwordValue !== confPasswordValue) {
      // Check if password and confirm password values match
      passwordError.textContent = "Passwords do not match!";
    } else {
      passwordError.textContent = "";
    }

    // Set the color of the password error message
    passwordError.style.color = passwordError.textContent === "" ? "" : "red";
  }

  // Prevent the default form submission behavior
  signup.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    // Check if the passwords match
    if (password.value !== confPassword.value) {
      passwordError.textContent = "Passwords do not match!";
      passwordError.style.color = "red";
    } else {
      // Get the email and password values from the form
      const body = {
        email: signup.email.value,
        password: signup.password.value,
      };
      console.log(body);
      try {
        // Send a POST request to the server with the email and password values
        const res = await fetch("/signup", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.user) {
          location.replace("/onboarding");
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <div className="container">
      <div className="auth-container">
        <h1>Create account!</h1>
        <form id="signup-form">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minlength="6"
          />

          <label for="password">Confirm Password</label>
          <input
            type="password"
            name="conf_password"
            placeholder="Confirm password"
            required
            minlength="6"
            on
          />
          <p
            className="password-error"
            style={{
              fontSize: "10px",
              textAlign: "end",
            }}
          ></p>
        </form>
        <div className="actions">
          <button className="primary-button" id="signup" form="signup-form">
            Create account
          </button>
        </div>
        <p style={{ fontSize: "15px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};
export default SignupPage;

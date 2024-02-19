import { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/css/auth/auth.css";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    const URL = "http://localhost:3000/api/login";
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      setError("root", { shouldFocus: true });
    }
  };
  return (
    <div className="container">
      <div className="auth-container">
        <h1>Welcome back!</h1>
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="kwamenkrumah@xyz.com"
            {...register("email")}
            autoComplete="on"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            {...register("password")}
            minLength={8}
          />
          <a href="/login" style={{ textAlign: "end" }}>
            Forgot password?
          </a>
        </form>
        {errors.root && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {errors.root.message}
          </p>
        )}
        <div className="actions">
          <button
            className="primary-button"
            id="login"
            form="login-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Checking details..." : "Lets go!"}
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

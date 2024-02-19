import { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/css/auth/auth.css";
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const onSubmit = async (data) => {
    const URL = "http://localhost:3000/api/signup";
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
        <h1>Create account!</h1>
        <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            {...register("email")}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength="6"
            {...register("password")}
          />

          <label htmlFor="role">Choose role</label>
          <select
            {...register("role")}
            name="role"
            id="role"
            className="custom-select"
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>

          <p
            className="password-error"
            style={{
              fontSize: "10px",
              textAlign: "end",
            }}
          ></p>
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
        </form>
        <div className="actions">
          <button
            disabled={isSubmitting}
            className="primary-button"
            id="signup"
            form="signup-form"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
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

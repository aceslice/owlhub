import "../assets/css/auth/auth.css";

const LoginComponent = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <h1>Welcome back!</h1>
        <form id="login-form">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
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

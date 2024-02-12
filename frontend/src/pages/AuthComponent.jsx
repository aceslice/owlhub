import "../assets/css/auth/auth.css";

const AuthComponent = () => {
  const getLoginPage = () => {
    // Redirect the user to the login page
    window.location.assign(`/login`);
  };
  function getSignupPage() {
    // Redirect the user to the signup page
    window.location.assign(`/signup`);
  }
  return (
    <div className="container">
      <div className="auth-container">
        <h1>Hi there!</h1>
        <p>Welcome to the peer to peer community.</p>
        <div className="actions">
          <button className="primary-button" onClick={getSignupPage}>
            Create an account
          </button>
          <button className="tertiary-button" onClick={getLoginPage}>
            Log in
          </button>
        </div>
        <fieldset>
          <legend>or continue with</legend>
        </fieldset>
        <div className="socials">
          <button>
            <img src="/img/google.png" alt="" />
          </button>
          <button>
            <img src="/img/apple.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AuthComponent;

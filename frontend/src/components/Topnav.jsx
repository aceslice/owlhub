import logo from "../assets/img/logo.png";

const Topnav = () => {
  return (
    <div className="topnav">
      <a href="/">
        <img src={logo} alt="Corsa Academy logo" className="logo" />
      </a>
      <div className="links">
        <a href="/">For students</a>
        <a href="/about">About us</a>
        <a href="/courses">Meetups</a>
        <a href="/tutors">Peers</a>
        <a href="/seminars">Rersources</a>
      </div>
      <a href="auth">
        <button className="primary-button">Get Started now!</button>
      </a>
    </div>
  );
};

export default Topnav;

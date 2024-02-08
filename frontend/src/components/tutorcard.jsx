import { useEffect, useState } from "react";
import brain_icon from "/brain.svg";
import favorite from "/favorite.svg";
import verified from "/verified_account.svg";
import guru from "/guru.svg";
import Avvvatars from "avvvatars-react";

const TutorCard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/api/all");
      const data = await response.json();

      if (response.ok) {
        setUsers(data);
        console.log(users);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="img-container">
      {users.slice(0, 2).map((user, index) => (
        <div className="tutor-card" key={index}>
          <div
            className="header"
            style={{
              backgroundImage: `url('/img/${user.profilePicture}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay">
              <img src={favorite} alt="" className="icon" />
            </div>
          </div>
          <div className="details">
            <img src={brain_icon} alt="" className="img" />
            <p className="expertise">
              <img src={guru} alt={guru} className="ico" />
              Expert in Coding
            </p>
            <p className="name">
              {user.firstName} {user.middleName} {user.lastName}
              <img src={verified} alt="" className="ico" />
            </p>
            {/* <button
              data-custom=""
              data-user=">"
              className="primary-button icon"
            >
              Follow {user.firstName}
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TutorCard;

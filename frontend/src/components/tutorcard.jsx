import { useEffect, useState } from "react";
import heart from "../assets/img/heart.svg";

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
            style={{ background: `url(${user.profilePicture})` }}
          >
            {" "}
            <div className="overlay">
              <img src={heart} alt="" className="icon" />
            </div>
          </div>
          <div className="details">
            <img src={heart} alt="" className="img" />
            <p className="expertise">Expert in {user.expertise}</p>
            <p className="name">{user.name}</p>
            <button
              data-custom=""
              data-user=">"
              className="primary-button icon"
            >
              Follow @{user.username}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TutorCard;

import { useState } from "react";
import "../Style/style.css";
import welcomelogo from "../Style/welcome-logo.png";
import { useHistory, useNavigate } from "react-router-dom";
import Weather from "./weather";

const MainPage = () => {
  const [username, setUsername] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    // history.push("/");
    navigate("/");
  };

  // Retrieve the user's username from localStorage
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    setUsername(loginData.username);
  }

  return (
    <div className="main-page">
      <div className="d-flex flex-row-reverse">
        <button
          type="button"
          className="btn mt-4"
          style={{
            color: "black",
            "background-color": "white",
            "font-weight": "bold",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Weather />
    </div>
  );
};

export default MainPage;

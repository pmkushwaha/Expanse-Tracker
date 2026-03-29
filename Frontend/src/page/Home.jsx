 import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    API.get("user/")
      .then((res) => {
        setUsername(res.data.username);
        console.log("User API response:", res.data);
     console.log(username)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // for logout
const navigate = useNavigate();

  const handleLogout = () => {
    // remove tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    // redirect to login page
    navigate("/");
  };



  return (
    <div>
      <h1>Welcome {username} 👋</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
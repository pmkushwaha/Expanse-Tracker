 import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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
// const navigate = useNavigate();

//   const handleLogout = () => {
//     // remove tokens
//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");

//     // redirect to login page
//     navigate("/");
//   };



  return (

    <div>
          <Navbar></Navbar>
   

      {/* <button onClick={handleLogout}>
        Logout
      </button> */}
      <h2>Welcome {username} 👋</h2>
<p>
  This is a full-stack application built using React and Django REST Framework.
  It features secure JWT authentication, allowing users to log in, access protected routes,
  and interact with backend APIs efficiently.
</p>
    </div>
  );
}

export default Home;
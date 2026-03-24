 import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    API.get("user/")
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome {username} 👋</h1>
    </div>
  );
}

export default Home;
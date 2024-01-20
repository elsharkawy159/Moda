import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function IsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const tokenSecret = "TokenSecret";

    try {
      if (userToken) {
        const decodedToken = jwt.verify(userToken, tokenSecret);
        console.log(decodedToken);
        setUserData(decodedToken);
        setIsLoggedIn(true);
      } else {
        console.log("Invalid userToken");
        // logout();
      }
    } catch (error) {
      console.error("Error verifying token:", error.message);
      logout();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    setUserData(null);
  };
}

export default IsLoggedIn;

import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        };
        fetch(`http://localhost:5000/login/${email}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setToken(data.token);
            localStorage.setItem("accessToken", data.token);
          });
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;

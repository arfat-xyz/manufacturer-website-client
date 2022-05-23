import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

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
        fetch(`http://localhost:5000/login/`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
          });
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;

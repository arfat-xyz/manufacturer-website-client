import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: `bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      fetch(`http://localhost:5000/admin/${user?.email}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setAdmin(data?.role);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;

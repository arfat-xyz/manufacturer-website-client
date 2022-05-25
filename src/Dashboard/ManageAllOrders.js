import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const ManageAllOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { isLoading, data } = useQuery("allorders", () =>
    fetch(
      `http://localhost:5000/allorders/${user?.email}`,
      requestOptions
    ).then((res) => res.json())
  );
  console.log(data);
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-3xl text-secondary">Manage All Orders</div>
    </div>
  );
};

export default ManageAllOrders;

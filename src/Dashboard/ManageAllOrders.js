import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";
import ManageAllOrdersRow from "./ManageAllOrdersRow";

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
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-3xl text-secondary">Manage All Orders</div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Details</th>
              <th>Product name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <ManageAllOrdersRow key={order._id} order={order} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;

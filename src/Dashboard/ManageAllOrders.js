import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const ManageAllOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  return <div>manage all orders</div>;
};

export default ManageAllOrders;

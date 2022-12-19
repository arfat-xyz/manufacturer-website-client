import React from "react";
import { toast } from "react-toastify";

const ManageAllOrdersRow = ({ order, index, refetch }) => {
  const { user_name, email, status, address, number, product_name, quantity } =
    order;
  console.log(order);
  const handlePending = (id) => {
    console.log(id);
    const confirm = window.confirm(
      `Are you sure you delivered ${product_name}`
    );
    if (confirm) {
      const url = `https://mobile-manufacturer-server.onrender.com/delivered/${id}`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            console.log(data);
            toast.success(`Congress! you delivered ${product_name}`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div>
          <div>Buyer Name : {user_name}</div>
          <div>Buyer Email : {email}</div>
          <div>Buyer Address : {address}</div>
          <div>Buyer Number : {number}</div>
        </div>
      </td>
      <td>{product_name}</td>
      <td>{quantity}</td>
      <td>
        {status === "Not paid" && "Not paid"}
        {status === "paid" && (
          <button
            onClick={() => {
              handlePending(order._id);
            }}
            className="btn btn-seconday text-white"
          >
            Pending
          </button>
        )}
        {status === "delivered" && (
          <span className="text-success">Shipped</span>
        )}
      </td>
    </tr>
  );
};

export default ManageAllOrdersRow;

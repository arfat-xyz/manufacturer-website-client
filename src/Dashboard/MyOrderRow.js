import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrderRow = ({ order, index, refetch }) => {
  const onCancel = (id) => {
    const confirm = window.confirm(
      `you sure you want to cancel ${order.product_name}`
    );
    if (confirm) {
      fetch(
        `https://mobile-manufacturer-server.onrender.com/myordercancel/${id}/${order.email}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            auth: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.result?.deletedCount > 0) {
            toast.success(
              `You deleted ${order.product_name} form your order list`
            );
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product_name}</td>
      <td>{order.quantity}</td>
      <td>{order.address}</td>
      <td className=" text-center">
        {order.status === "Not paid" && (
          <Link
            className="btn btn-sm btn-secondary text-white"
            to={`/dashboard/buy/${order._id}`}
          >
            Buy Now
          </Link>
        )}
        {order.status === "paid" && (
          <>
            <span className="text-green-400">Paid</span>
          </>
        )}
        {order.status === "delivered" && (
          <>
            <span className="text-green-400">Shipped</span>
          </>
        )}
      </td>
      <td>
        {order.status === "paid" || order.status === "delivered" ? (
          ""
        ) : (
          <button
            onClick={() => onCancel(order._id)}
            className="btn btn-sm btn-secondary text-white"
          >
            cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;

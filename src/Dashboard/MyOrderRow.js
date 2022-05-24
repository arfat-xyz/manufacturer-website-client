import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrderRow = ({ order, index, refetch }) => {
  const onCancel = (id) => {
    fetch(`http://localhost:5000/myordercancel/${id}/${order.email}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.result?.deletedCount > 0) {
          toast.success(
            `You deleted ${order.product_name} form your order list`
          );
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product_name}</td>
      <td>{order.quantity}</td>
      <td>{order.address}</td>
      <td>
        <Link className="btn btn-sm btn-secondary text-white" to="">
          Buy Now
        </Link>
      </td>
      <td>
        <button
          onClick={() => onCancel(order._id)}
          className="btn btn-sm btn-secondary text-white"
          to=""
        >
          cancel
        </button>
      </td>
    </tr>
  );
};

export default MyOrderRow;

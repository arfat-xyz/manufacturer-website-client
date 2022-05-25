import React from "react";

const ManageAllOrdersRow = ({ order, index }) => {
  console.log(order);
  const { user_name, email, status, address, number, product_name, quantity } =
    order;
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
          <button className="btn btn-seconday text-white">Pending</button>
        )}
      </td>
    </tr>
  );
};

export default ManageAllOrdersRow;

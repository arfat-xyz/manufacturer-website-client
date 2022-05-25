import React from "react";

const ManageProductROw = ({ product, index }) => {
  const { _id, img, name, minimum, available, price } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt={_id} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{available}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ManageProductROw;

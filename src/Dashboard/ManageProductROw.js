import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const ManageProductROw = ({ product, index, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, img, name, minimum, available, price } = product;
  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}`);
    if (confirm) {
      const email = user?.email;
      const url = `http://localhost:5000/deleteproduct/${email}/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          auth: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result.deletedCount > 0) {
            toast.success("You've deleted a product");
            refetch();
          }
        });
    }
  };
  if (loading) {
    return <Loading />;
  }
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
      <td>
        <button
          className="btn btn-secondary text-white "
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductROw;

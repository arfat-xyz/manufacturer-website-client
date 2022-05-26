import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ index, user, refetch }) => {
  const handleAdmin = (id) => {
    const confirm = window.confirm(
      `Are you sure you want to make admin ${user.email}`
    );
    if (confirm) {
      const email = user?.email;
      const url = `https://floating-mountain-13716.herokuapp.com/makeadmin/${id}`;
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
            toast.success(`You make ${email} an admin`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <span className="text-success">Admin</span>
        ) : (
          <button
            onClick={() => handleAdmin(user._id)}
            className="btn text-white btn-secondary"
          >
            Make admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;

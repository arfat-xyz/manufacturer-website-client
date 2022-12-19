import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageProductROw from "./ManageProductROw";

const ManageProducts = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { isLoading, refetch, data } = useQuery("allorders", () =>
    fetch(
      `https://mobile-manufacturer-server.onrender.com/allproducts/`,
      requestOptions
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-3xl text-secondary">Manage All Orders</div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Available</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <ManageProductROw
                refetch={refetch}
                key={product._id}
                index={index}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;

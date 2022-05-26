import React from "react";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import MyOrderRow from "./MyOrderRow";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, refetch, data } = useQuery("myorder", () =>
    fetch(
      `https://floating-mountain-13716.herokuapp.com/myorder/${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading || loading) return <Loading />;

  return (
    <div>
      <div className="text-3xl text-secondary">My orders</div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product name</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Situation</th>
              <th>Cancelation</th>
            </tr>
          </thead>
          <tbody>
            {data?.orders?.map((order, index) => (
              <MyOrderRow
                refetch={refetch}
                order={order}
                index={index}
                key={order._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;

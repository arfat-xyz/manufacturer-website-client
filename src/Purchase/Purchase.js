import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const params = useParams();
  const id = params.id;
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, data } = useQuery("purchase", () =>
    fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
  );
  const { name, email } = user;
  console.log(data);
  if (loading || isLoading) {
    return <Loading />;
  }
  console.log(id);
  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

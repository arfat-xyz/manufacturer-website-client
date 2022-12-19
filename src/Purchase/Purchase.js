import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [active, setActive] = useState(false);

  const [user, loading] = useAuthState(auth);
  /* const extra = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: { email },
  }; */
  const { isLoading, data } = useQuery("purchase", () =>
    fetch(
      `https://mobile-manufacturer-server.onrender.com/purchase/${id}`
    ).then((res) => res.json())
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { quantity: 50 },
  });
  const onSubmit = (e) => {
    e.status = "Not paid";
    e.price = data?.tool?.price * e?.quantity;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(e),
    };
    fetch(
      `https://mobile-manufacturer-server.onrender.com/purchase/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.quantityUpdateResult?.modifiedCount > 0) {
          toast.success("Congress you add a product to my order");
          navigate("/dashboard/myorder");
        }
      });
  };
  const { displayName, email } = user;

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className=" m-5 grid items-center justify-center">
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-96">
          <img className="w-full" src={data.tool.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>{" "}
              <fieldset disabled>
                <input
                  type="text"
                  value={displayName}
                  className="input input-bordered w-full"
                  required
                  {...register("user_name", { required: true })}
                />
              </fieldset>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>{" "}
              <fieldset disabled>
                <input
                  type="email"
                  value={email}
                  className="input input-bordered w-full"
                  required
                  {...register("email", { required: true })}
                />
              </fieldset>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <fieldset disabled>
                <input
                  type="text"
                  value={data?.tool?.name}
                  className="input input-bordered w-full"
                  required
                  {...register("product_name", { required: true })}
                />
              </fieldset>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Delivery address</span>
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="input input-bordered w-full"
                {...register("address", { required: true })}
              />

              <label className="label">
                {errors.address && (
                  <span className="label-text-alt text-red-500">
                    Address is required
                  </span>
                )}
              </label>
            </div>

            {/* this is for phone  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                {...register("number", {
                  minLength: {
                    value: 11,
                    message: "Minimum Length must be 11",
                  },
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
              />

              <label className="label">
                {errors.number?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.number?.message}
                  </span>
                )}
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.number?.message}
                  </span>
                )}
              </label>
            </div>

            {/* this is for quantity  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product quantity</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                {...register("quantity", {
                  min: {
                    value: data?.tool?.minimum,
                    message: "Minimum quantity must be 50",
                  },
                  max: {
                    value: data?.tool?.available,
                    message: `Maximum quantity must be less or equal ${data?.tool?.available}`,
                  },
                  required: {
                    value: true,
                    message: "quantity is required",
                  },
                })}
                onChange={(e) => {
                  const number = parseInt(e.target.value);
                  const minimum = parseInt(data?.tool?.minimum);
                  const available = parseInt(data?.tool?.available);
                  if (number >= minimum && number <= available) {
                    setActive(false);
                  } else {
                    setActive(true);
                    toast.error(
                      `minimum quantity is ${data.tool.minimum} and maximum quantity is ${data.tool.available} `
                    );
                  }
                }}
              />
              <label className="label">
                {errors.quantity?.type === "min" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}{" "}
                {errors.quantity?.type === "max" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <input
                disabled={active}
                type="submit"
                className={`mt-5 btn w-full   ${
                  active ? "btn-primary" : "btn-secondary"
                }`}
                value="Add to Cart"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

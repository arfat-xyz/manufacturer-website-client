import React from "react";
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
    fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
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
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(e),
    };
    fetch(`http://localhost:5000/purchase/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.quantityUpdateResult?.modifiedCount > 0) {
          toast.success("Congress you buy a product");
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
      <div class="card bg-base-100 shadow-xl">
        <figure className="w-96">
          <img className="w-full" src={data.tool.img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Your name</span>
              </label>{" "}
              <fieldset disabled>
                <input
                  type="text"
                  value={displayName}
                  class="input input-bordered w-full"
                  required
                  {...register("user_name", { required: true })}
                />
              </fieldset>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Your email</span>
              </label>{" "}
              <fieldset disabled>
                <input
                  type="email"
                  value={email}
                  class="input input-bordered w-full"
                  required
                  {...register("email", { required: true })}
                />
              </fieldset>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Product name</span>
              </label>
              <fieldset disabled>
                <input
                  type="text"
                  value={data?.tool?.name}
                  class="input input-bordered w-full"
                  required
                  {...register("product_name", { required: true })}
                />
              </fieldset>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Delivery address</span>
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                class="input input-bordered w-full"
                {...register("address", { required: true })}
              />

              <label class="label">
                {errors.address && (
                  <span class="label-text-alt text-red-500">
                    Address is required
                  </span>
                )}
              </label>
            </div>

            {/* this is for phone  */}
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Phone number</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                class="input input-bordered w-full"
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

              <label class="label">
                {errors.number?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors?.number?.message}
                  </span>
                )}
                {errors.number?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors?.number?.message}
                  </span>
                )}
              </label>
            </div>

            {/* this is for quantity  */}
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Product quantity</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                class="input input-bordered w-full"
                {...register("quantity", {
                  min: {
                    value: 50,
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
              />
              <label class="label">
                {errors.quantity?.type === "min" && (
                  <span class="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}{" "}
                {errors.quantity?.type === "max" && (
                  <span class="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}
                {errors.quantity?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <input
                type="submit"
                className="mt-5 btn w-full btn-primary"
                value="Purchase"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

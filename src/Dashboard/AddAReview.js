import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const AddAReview = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, data } = useQuery("reviewtools", () =>
    fetch("http://localhost:5000/hometools").then((res) => res.json())
  );
  const email = user?.email;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  if (isLoading || loading) {
    return <Loading />;
  }

  const onSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(e),
    };
    fetch("http://localhost:5000/addareview", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Congratulation you review a product");
        }
      });
  };

  return (
    <div>
      <div className="text-4xl text-secondary">Add a review</div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Procuct name</span>
              </label>

              <select
                class="select select-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required", // JS only: <p>error message</p> TS only support string
                  },
                })}
              >
                {data.map((tool) => (
                  <option>{tool.name}</option>
                ))}
              </select>
              <label class="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
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

            <div class="form-control ">
              <label class="label">
                <span class="label-text">Comment</span>
              </label>
              <textarea
                {...register("comment", {
                  required: {
                    value: true,
                    message: "Comment is required", // JS only: <p>error message</p> TS only support string
                  },
                })}
                name="comment"
                class="textarea textarea-bordered h-24"
                id=""
              ></textarea>

              <label class="label">
                {errors.comment?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.comment.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control ">
              <label class="label">
                <span class="label-text">Ratings</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered"
                {...register("star", {
                  required: {
                    value: true,
                    message: "Rating is required", // JS only: <p>error message</p> TS only support string
                  },
                  min: {
                    value: 1,
                    message: "Minimum value must be 1",
                  },
                  max: {
                    value: 5,
                    message: `Maximum value must be 5`,
                  },
                })}
              />
              <label class="label">
                {errors.star?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.star.message}
                  </span>
                )}
                {errors.star?.type === "min" && (
                  <span className="label-text-alt text-red-500">
                    {errors.star.message}
                  </span>
                )}
                {errors.star?.type === "max" && (
                  <span className="label-text-alt text-red-500">
                    {errors.star.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;

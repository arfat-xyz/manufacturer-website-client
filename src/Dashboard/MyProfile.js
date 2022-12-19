import React from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, refetch, data } = useQuery("myorder", () =>
    fetch(
      `https://mobile-manufacturer-server.onrender.com/userupdate/${user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    console.log(e);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(e),
    };
    fetch(
      `https://mobile-manufacturer-server.onrender.com/userupdate/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result.modifiedCount > 0) {
          toast.success("You've updated your information");
          refetch();
        }
      });
  };
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-3xl text-secondary">My Profile</div>
      <div className="my-8 grid items-center justify-center">
        <div className="card w-full bg-base-100 shadow-xl">
          {/* <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure> */}
          <div className="card-body w-96">
            <div>
              <div>User name :{user?.displayName}</div>
              <div>User email :{user?.email}</div>
              <div>
                {data?.user?.education ? (
                  <span>Education :{data?.user?.education}</span>
                ) : (
                  <span>Education: Not set yet </span>
                )}
              </div>
              <div>
                {data?.user?.linkedin ? (
                  <span>Linkedin :{data?.user?.linkedin}</span>
                ) : (
                  <span>Linkedin: Not set yet </span>
                )}
              </div>
              <div>
                {data?.user?.location ? (
                  <span>Location :{data?.user?.location}</span>
                ) : (
                  <span>Location: Not set yet </span>
                )}
              </div>
              <div>
                {data?.user?.phone ? (
                  <span>Phone :{data?.user?.phone}</span>
                ) : (
                  <span>Phone: Not set yet </span>
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>{" "}
                <fieldset disabled>
                  <input
                    type="text"
                    value={user?.displayName}
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
                    value={user?.email}
                    className="input input-bordered w-full"
                    required
                    {...register("email", { required: true })}
                  />
                </fieldset>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "Education is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  {errors.education?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.education.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  {errors.location?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required", // JS only: <p>error message</p> TS only support string
                    },
                    minLength: {
                      value: 11,
                      message: "Minimum Length must be 11",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.phone?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">LinkedIn</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("linkedin", {
                    required: {
                      value: true,
                      message: "Linkedin is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  {errors.linkedin?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.linkedin.message}
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
    </div>
  );
};

export default MyProfile;

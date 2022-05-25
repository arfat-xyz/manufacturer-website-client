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
    fetch(`http://localhost:5000/userupdate/${user?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
    fetch(`http://localhost:5000/userupdate/`, requestOptions)
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
      <div className="my-8 w-96 grid items-center justify-center">
        <div class="card w-full bg-base-100 shadow-xl">
          {/* <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure> */}
          <div class="card-body">
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
            <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Your name</span>
                </label>{" "}
                <fieldset disabled>
                  <input
                    type="text"
                    value={user?.displayName}
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
                    value={user?.email}
                    class="input input-bordered w-full"
                    required
                    {...register("email", { required: true })}
                  />
                </fieldset>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "Education is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.education?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.education.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Location is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.location?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  class="input input-bordered"
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
                <label class="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span class="label-text-alt text-red-500">
                      {errors?.phone?.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">LinkedIn</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("linkedin", {
                    required: {
                      value: true,
                      message: "Linkedin is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
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

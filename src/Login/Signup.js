import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { async } from "@firebase/util";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";
const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const name = e.name;
    const email = e.email;
    const password = e.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    reset();
  };
  const [token] = useToken(user);
  if (loading || updating) {
    return <Loading />;
  }
  token && navigate(from, { replace: true });
  return (
    <div className="grid justify-center items-center h-screen w-screen">
      <div className="shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Passoword</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required", // JS only: <p>error message</p> TS only support string
                },
                minLength: {
                  value: 6,
                  message: "Minimum Length 6 character", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div>
            Already a user ?
            <Link className="text-primary" to={"/login"}>
              Login
            </Link>
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Sign up"
              className="btn btn-secondary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

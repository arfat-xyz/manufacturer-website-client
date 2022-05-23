import { async } from "@firebase/util";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Shared/Loading";
import ForgetPassword from "./ForgetPassword";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const email = e.email;
    const password = e.password;
    await signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <Loading />;
  }
  token && navigate(from, { replace: true });

  return (
    <div className="grid justify-center items-center h-screen w-screen">
      <div className="shadow-lg w-96 rounded-lg p-5">
        <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              class="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control ">
            <label class="label">
              <span class="label-text">Passoword</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              class="input input-bordered"
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
            <label class="label">
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
            Forget password ?
            <label
              for="forget-password-modal"
              class="text-red-700 cursor-pointer"
            >
              Click here
            </label>
          </div>
          <div>
            New here ?
            <Link className="text-primary" to={"/signup"}>
              Sign up
            </Link>
          </div>
          <div>
            {error && (
              <span className="text-red-500">
                Something is wrong please check your email and password
              </span>
            )}
          </div>
          <div className="grid my-5 justify-center items-center">
            <div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary text-white"
              />
            </div>
          </div>
        </form>
        <SocialLogin />
      </div>
      <ForgetPassword />
    </div>
  );
};

export default Login;

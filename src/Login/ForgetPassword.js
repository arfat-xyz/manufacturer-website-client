import React from "react";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const ForgetPassword = () => {
  const [updatePassword, error] = useUpdatePassword(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const email = e.email;
    console.log(email);
    await updatePassword(email);
    toast.info("Please check out email");
  };
  return (
    <div>
      <input
        type="checkbox"
        id="forget-password-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="grid justify-end">
            <label
              for="forget-password-modal"
              className="cursor-pointer shadow-md px-2 py-1 rounded-full"
            >
              x
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
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
                    message: "Email is required",
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
            <div>
              {error && (
                <span className="text-red-500">Please Check your email</span>
              )}
            </div>
            <div>
              <label for="forget-password-modal">
                <input
                  for="forget-password-modal"
                  type="submit"
                  value="Submit"
                  className="btn btn-secondary text-white"
                />
              </label>
            </div>
          </form>

          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    };
    fetch(
      "https://floating-mountain-13716.herokuapp.com/addaproduct",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("You've added a product");
          navigate("/dashboard/manageproducts");
        }
      });
  };
  return (
    <div>
      <div className="text-3xl text-secondary">Add a product</div>
      <div className="grid justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className=" m-8">
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  {...register("desc", {
                    required: {
                      value: true,
                      message: "Description is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                  name="desc"
                  class="textarea textarea-bordered h-24"
                  id=""
                ></textarea>

                <label class="label">
                  {errors.desc?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.desc.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Available</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("available", {
                    required: {
                      value: true,
                      message: "Available is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.available?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.available.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Minimum order</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("minimum", {
                    required: {
                      value: true,
                      message: "Minimum is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.minimum?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.minimum.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Price per pice</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image URL is required", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label class="label">
                  {errors.img?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.img.message}
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

export default AddAProduct;

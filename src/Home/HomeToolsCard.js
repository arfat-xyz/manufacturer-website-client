import React from "react";
import { Link } from "react-router-dom";

const HomeToolsCard = ({ tool }) => {
  const { _id, available, desc, price, img, name, minimum } = tool;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={_id} />
      </figure>
      <div class="card-body">
        <h2 class="card-title capitalize">{name}</h2>
        <p>{desc}</p>
        <p>Available : {available}</p>
        <p>Minimum order : {minimum}</p>
        <p>Price per : ${price}</p>
        <div class="card-actions justify-center">
          <Link to={`purchase/${_id}`} class="btn btn-primary text-white">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeToolsCard;

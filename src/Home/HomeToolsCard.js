import React from "react";
import { Link } from "react-router-dom";

const HomeToolsCard = ({ tool }) => {
  const { _id, available, desc, price, img, name, minimum } = tool;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={_id} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <p>{desc}</p>
        <p>Available : {available}</p>
        <p>Minimum order : {minimum}</p>
        <p>Per unit price : ${price}</p>
        <div className="card-actions justify-center">
          <Link to={`purchase/${_id}`} className="btn btn-primary text-white">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeToolsCard;

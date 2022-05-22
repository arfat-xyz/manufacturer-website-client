import React from "react";

const HomeToolsCard = ({ tool }) => {
  const { _id, available, desc, img, name } = tool;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={_id} />
      </figure>
      <div class="card-body">
        <h2 class="card-title capitalize">{name}</h2>
        <p>{desc}</p>
        <p>Available : {available}</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeToolsCard;

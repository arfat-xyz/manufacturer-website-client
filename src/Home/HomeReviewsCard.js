import React from "react";

const HomeReviewsCard = ({ review }) => {
  console.log(review);
  const { _id, name, product, comment, star } = review;
  const stars = [];
  for (var i = 0; i < star; i++) {
    stars.push(
      <img
        className="pl-2"
        src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
        alt=""
      />
    );
  }
  console.log(stars);
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Product Name : {product}</h2>
        <p>Customer Name : {name}</p>
        <p>{comment}</p>
        <div className="flex">
          Ratings :{" "}
          {stars.map((element) => {
            return element;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeReviewsCard;

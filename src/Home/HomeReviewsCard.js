import React from "react";

const HomeReviewsCard = ({ review }) => {
  const { _id, name, product, comment, star } = review;
  const stars = [];
  for (var i = 0; i < star; i++) {
    stars.push(
      <input
        key={i}
        type="radio"
        checked
        readOnly
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
      />
    );
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">Product Name : {product}</h2>
        <p>Customer Name : {name}</p>
        <p>{comment}</p>

        <div className="rating gap-1">
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

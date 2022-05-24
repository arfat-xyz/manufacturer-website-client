import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import HomeReviewsCard from "./HomeReviewsCard";

const HomeReviews = () => {
  const { isLoading, data: reviews } = useQuery("homeReviews", () =>
    fetch("http://localhost:5000/homereviews").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-2xl md:text-5xl uppercase text-primary font-bold text-center my-10">
        latest reviews
      </div>
      <div className="w-3/4 my-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.slice(reviews.length - 3, reviews.length + 1).map((review) => (
          <HomeReviewsCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;

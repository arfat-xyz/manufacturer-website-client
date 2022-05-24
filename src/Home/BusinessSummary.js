import React, { useState } from "react";

import CountUp from "react-countup";
const BusinessSummary = () => {
  const [loading, setLoading] = useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };
  return (
    <div>
      <div className="text-2xl md:text-5xl uppercase text-primary font-bold text-center my-10">
        Our success
      </div>
      <div className="gap-8 md:m-8 grid grid-cols-1 md:grid-cols-3">
        <div className="flex items-center flex-col">
          <img
            className="w-24"
            src="https://i.ibb.co/nzQdT5t/review-rating-2795.png"
            alt=""
          />
          <div className="text-3xl font-bold">
            <CountUp
              end={33}
              duration="3"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            K+
          </div>
          <div className="text-primary">Reviews</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-24"
            src="https://i.ibb.co/qWt4GS9/306245.png"
            alt=""
          />
          <div className="text-3xl font-bold">
            <CountUp
              end={120}
              duration="3"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            M+
          </div>
          <div className="text-primary">Annual revenue</div>
        </div>
        <div className="flex items-center flex-col">
          <img
            className="w-24"
            src="https://i.ibb.co/6Hg8HcP/users-267.png"
            alt=""
          />
          <div className="text-3xl font-bold">
            <CountUp
              end={1000}
              duration="3"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            +
          </div>
          <div className="text-primary">Customers</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

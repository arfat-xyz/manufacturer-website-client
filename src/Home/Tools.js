import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import HomeToolsCard from "./HomeToolsCard";

const Tools = () => {
  const { isLoading, data: tools } = useQuery("homeTools", () =>
    fetch("http://localhost:5000/hometools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-2xl md:text-5xl uppercase text-primary font-bold text-center my-10">
        our products
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.slice(0, 6).map((tool) => (
          <HomeToolsCard key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return <div>hi</div>;
};

export default Purchase;

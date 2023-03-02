import React from "react";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  return (
    <>
      <div>Update {id}</div>
    </>
  );
}

export default Update;

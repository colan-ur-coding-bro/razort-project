import React from "react";
import { FaRedo } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="loading text-center ">
      <h3>Rooms is loading...</h3>
      <FaRedo className="spinner span" />
    </div>
  );
}

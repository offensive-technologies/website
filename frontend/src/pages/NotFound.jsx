import { unavailables } from "../api/data";
import React from "react";

export default function NotFound() {
  const value =
    unavailables[Math.floor(Math.random() * (unavailables.length - 1))];

  return (
    <>
      <div className="notfound">
        <p>{value}</p>
      </div>
    </>
  );
}

import React from "react";
import { FaLock } from "react-icons/fa";
import "./css/tools.css";

export default function IconItemTools({ lb }) {
  // onclick ga naar a tag op zelfde pagina
  return (
    <div>
      <img className="icon tools-icon" src={lb.img} alt={lb.title} />
      <p className="icon-title icon-tools-title">{lb.title}</p>
      <div className="lock-icon">
        <FaLock />
      </div>
    </div>
  );
}

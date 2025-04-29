import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { tools_blocks } from "../../api/data";
import "./css/tools.css";
import React from "react";
import IconItemTools from "../../components/tools/IconItemTools";

export default function Tools() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromMenu) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="tools-page">
      <div className="icons-flexbox">
        {tools_blocks.map((lb) => (
          <IconItemTools key={lb.title} lb={lb} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import IconItem from "./IconItem";

export default function IconGrid({ blocks, selectedTable, onIconClick }) {
  return (
    <div className={`icons-flexbox ${selectedTable ? "hide" : "show"}`}>
      {blocks.map((lb) => (
        <IconItem key={lb.title} lb={lb} onClick={onIconClick} />
      ))}
    </div>
  );
}

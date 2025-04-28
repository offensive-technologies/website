import { IoIosArrowUp } from "react-icons/io";
import CodeSegment from "./CodeSegment";
import AutoComplete from "./AutoComplete";
import { library_suggestions } from "../../api/data";
import React from "react";

export default function SearchArea({
  selectedTable,
  searchInput,
  confirmedSearch,
  entered,
  onBack,
  onSearchChange,
  onEnter,
  searchBarRef,
  suggestions,
  onSuggestionSelect,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  const isInList = entered
    ? library_suggestions.some(
        (suggestion) => suggestion.title === confirmedSearch
      )
    : false;

  return (
    <div
      className={`library-bottom-flexbox ${selectedTable ? "show" : "hide"}`}
      ref={searchBarRef}
    >
      <div
        className={`back-to-icons ${entered ? "after-enter" : ""}`}
        onClick={onBack}
      >
        <IoIosArrowUp size={30} />
      </div>

      <input
        id="search"
        placeholder={`Search in ${selectedTable || "..."}`}
        value={searchInput}
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
      />

      <AutoComplete suggestions={suggestions} onSelect={onSuggestionSelect} />

      {confirmedSearch &&
        (isInList ? (
          <CodeSegment item={confirmedSearch} />
        ) : (
          <p>no result found on {confirmedSearch}</p>
        ))}
    </div>
  );
}

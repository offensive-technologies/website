import { IoIosArrowUp } from "react-icons/io";
import CodeSegment from "./CodeSegment";
import AutoComplete from "./AutoComplete";

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

      {/* Autocomplete suggesties */}
      <AutoComplete suggestions={suggestions} onSelect={onSuggestionSelect} />

      {/* Alleen tonen als Enter gedaan is */}
      {confirmedSearch && <CodeSegment item={confirmedSearch} />}
    </div>
  );
}

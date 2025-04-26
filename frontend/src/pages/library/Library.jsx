import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SearchArea from "../../components/library/SearchArea";
import IconGrid from "../../components/library/IconGrid";
import { library_suggestions } from "../../api/data";
import { library_blocks } from "../../api/data";
import "./css/library.css";

export default function Library() {
  const location = useLocation();
  const [selectedTable, setSelectedTable] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [confirmedSearch, setConfirmedSearch] = useState("");
  const [entered, setEntered] = useState(false);
  const searchBarRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = library_suggestions
      .filter((lb) => lb.title.toLowerCase().includes(value.toLowerCase()))
      .map((lb) => lb.title);

    setSuggestions(filtered);
  };

  const handleSuggestionSelect = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  useEffect(() => {
    if (location.state?.fromMenu) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleIconClick = (tableName) => {
    setConfirmedSearch("");
    setSelectedTable(tableName);
    setTimeout(() => {
      searchBarRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackToIcons = () => {
    setSelectedTable(null);
    resetSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetSearch = () => {
    setSearchInput("");
    setConfirmedSearch("");
    setEntered(false);
  };

  const handleEnterKey = () => {
    setConfirmedSearch(searchInput);
    setSearchInput("");
    setEntered(true);
  };

  return (
    <div className="library-page">
      <IconGrid
        blocks={library_blocks}
        selectedTable={selectedTable}
        onIconClick={handleIconClick}
      />
      <SearchArea
        selectedTable={selectedTable}
        searchInput={searchInput}
        confirmedSearch={confirmedSearch}
        entered={entered}
        onBack={handleBackToIcons}
        onSearchChange={handleSearchChange}
        onEnter={handleEnterKey}
        searchBarRef={searchBarRef}
        suggestions={suggestions}
        onSuggestionSelect={handleSuggestionSelect}
      />
    </div>
  );
}

import LibraryComponent from "../../components/library/LibraryComponent";
import { useState, useEffect, useRef } from "react";
import { library_blocks } from "../../api/mock_data";
import { useLocation } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import "./css/library.css";

export default function Library() {
  const location = useLocation();
  const [selectedTable, setSelectedTable] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [confirmedSearch, setConfirmedSearch] = useState("");
  const [entered, setEntered] = useState(false);

  const searchBarRef = useRef(null);

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

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const resetSearch = () => {
    setSearchInput("");
    setConfirmedSearch("");
    setEntered(false);
  };

  return (
    <div className="library-page">
      <div className={`icons-flexbox ${selectedTable ? "hide" : "show"}`}>
        {library_blocks.map((lb) => (
          <div key={lb.title} onClick={() => handleIconClick(lb.title)}>
            <img className="icon" src={lb.img} alt={lb.title} />
            <p>{lb.title}</p>
          </div>
        ))}
      </div>

      <div
        className={`library-bottom-flexbox ${selectedTable ? "show" : "hide"}`}
        ref={searchBarRef}
      >
        <div
          className={`back-to-icons ${entered ? "after-enter" : ""}`}
          onClick={handleBackToIcons}
        >
          <IoIosArrowUp size={30} />
        </div>
        <input
          id="search"
          placeholder={`Search in ${selectedTable || "..."}`}
          value={searchInput}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setConfirmedSearch(searchInput);
              setSearchInput("");
              setEntered(true);
            }
          }}
        />

        {confirmedSearch && <LibraryComponent item={confirmedSearch} />}
      </div>
    </div>
  );
}

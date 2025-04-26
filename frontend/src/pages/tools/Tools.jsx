import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import IconGrid from "../../components/library/IconGrid";
import { tools_blocks } from "../../api/data";
import "./css/tools.css";

export default function Library() {
  const location = useLocation();
  const [selectedTable, setSelectedTable] = useState(null);
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

  return (
    <div className="tools-page">
      <IconGrid
        blocks={tools_blocks}
        selectedTable={selectedTable}
        onIconClick={handleIconClick}
      />
    </div>
  );
}

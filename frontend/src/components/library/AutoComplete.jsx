import "./css/library.css";

export default function AutoComplete({ suggestions, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <ul className="autocomplete-list">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => onSelect(suggestion)}
          className="autocomplete-item"
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

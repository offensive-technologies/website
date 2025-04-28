import { IoIosArrowDown } from "react-icons/io";
import { languages } from "../../api/data";
import "./css/library.css";

export default function LanguageDropDown() {
  return (
    <>
      <div className="dropdown">
        <ul className="dropdown-menu">
          {languages.map((l, index) => (
            <li key={l.id} className={index === 0 ? "first-li" : ""}>
              <a>{l.name}</a>
              {index === 0 && <IoIosArrowDown className="arrow-icon" />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

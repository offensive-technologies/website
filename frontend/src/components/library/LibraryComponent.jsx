import CodeSegment from "./CodeSegment";
import "./css/library.css";

export default function LibraryComponent({ item }) {
  const languages = ["C#", "PY", "PS1"];

  return (
    <div className="library-component">
      <h2>{item}</h2>

      <div className="languages">
        {languages.map((l) => (
          <div>{l}</div>
        ))}
      </div>

      <div>
        <CodeSegment />
      </div>
      {/* hier kan je filters toepassen op je table of zo */}
    </div>
  );
}

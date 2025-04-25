import "./css/library.css";
import { library_blocks } from "../../api/mock_data";

export default function Library() {
  return (
    <>
      <div className="library-page">
        <div className="icons-flexbox">
          {library_blocks.map((lb) => (
            <div>
              <img className="icon" src={lb.img} />
              <p>{lb.title}</p>
            </div>
          ))}
        </div>
        <div className="library-bottom-flexbox">
          {/* <input id="search" placeholder="Search..."></input> */}
          {/* <div id="code-block"></div> */}
        </div>
      </div>
    </>
  );
}

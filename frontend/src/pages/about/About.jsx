import { about_blocks } from "../../api/mock_data";
import "./css/about.css";

export default function About() {
  console.log(about_blocks);

  return (
    <>
      <div className="about-page">
        {about_blocks.map((ab, i) => (
          <div>
            {i % 2 == 0 ? (
              <div className="about-block">
                <img src={ab.img} />
                <p>{ab.text}</p>
              </div>
            ) : (
              <div className="about-block">
                <p>{ab.text}</p>
                <img src={ab.img} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

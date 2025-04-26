import { about_blocks } from "../../api/data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./css/about.css";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromMenu) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

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

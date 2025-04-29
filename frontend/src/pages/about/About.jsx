import { about_blocks } from "../../api/data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
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
              <div>
                <div className="about-block">
                  <img src={ab.img} />
                  <div>
                    <h3 className="about-block-title">{ab.title}</h3>
                    <p>{ab.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="about-block uneven-block">
                  <div>
                    <h3 className="about-block-title">{ab.title}</h3>
                    <p>{ab.text}</p>
                  </div>
                  <img src={ab.img} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

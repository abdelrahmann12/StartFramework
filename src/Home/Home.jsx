import React from "react";
import HomeImg from "../assets/avataaars.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section>
        <div className="content">
          <div className="img">
            <img src={HomeImg} alt="" />
          </div>

          <div className="info">
            <h3>START FRAMEWORK</h3>
            <div className="design mb-2">
              <div className="line"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, useEffect } from "react";

import imageMain from "../Assets/fly1/main.png";
import image1 from "../Assets/fly1/fly1.png";
import image2 from "../Assets/fly1/fly2.png";
import image3 from "../Assets/fly1/fly3.png";
import image4 from "../Assets/fly1/fly4.png";
import image5 from "../Assets/fly1/fly5.png";

import "../Styles/Fly.css";

const Fly = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % 5);
  };

  useEffect(() => {
    const interval = setInterval(updateIndex, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="character-container">
      <a href="#home">
        <img alt="fly character" src={imageMain} className="flyingChar" />
      </a>
      <img
        src={image1}
        className={currentIndex === 0 ? "visible rocketFire" : "hidden"}
        alt="fly 1"
      />
      <img
        src={image2}
        style={{ marginLeft: "-0.6rem" }}
        className={currentIndex === 1 ? "visible rocketFire" : "hidden"}
        alt="fly 2"
      />
      <img
        src={image3}
        style={{ marginLeft: "-0.6rem" }}
        className={currentIndex === 2 ? "visible rocketFire" : "hidden"}
        alt="fly 3"
      />
      <img
        src={image4}
        style={{ marginLeft: "-0.6rem" }}
        className={currentIndex === 3 ? "visible rocketFire" : "hidden"}
        alt="fly 4"
      />
      <img
        src={image5}
        style={{ marginLeft: "-0.5rem" }}
        className={currentIndex === 4 ? "visible rocketFire" : "hidden"}
        alt="fly 5"
      />

      {/* ========================================================================= */}

      {/* <img
        src={image1}
        className={currentIndex === 1 ? "visible" : "visible"}
      />
      <img
        src={image2}
        className={currentIndex === 1 ? "visible" : "visible"}
        style={{ marginLeft: "-0.6rem" }}
      />
      <img
        src={image3}
        className={currentIndex === 1 ? "visible" : "visible"}
        style={{ marginLeft: "-0.6rem" }}
      />
      <img
        src={image4}
        className={currentIndex === 1 ? "visible" : "visible"}
        style={{ marginLeft: "-0.6rem" }}
      />
      <img
        src={image5}
        className={currentIndex === 1 ? "visible" : "visible"}
        style={{ marginLeft: "-0.5rem" }}
      /> */}
    </div>
  );
};

export default Fly;

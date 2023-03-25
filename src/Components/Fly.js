import { useState, useEffect } from "react";

import imageMain from "../Assets/fly1/main.png";
import waitingToFly from "../Assets/fly1/waitingToFly.png";
import image1 from "../Assets/fly1/fly1.png";
import image2 from "../Assets/fly1/fly2.png";
import image3 from "../Assets/fly1/fly3.png";
import image4 from "../Assets/fly1/fly4.png";
import image5 from "../Assets/fly1/fly5.png";

import "../Styles/Fly.css";

const Fly = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const updateIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % 5);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateIndex, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isScrolling && !isClicked && (
        <div onClick={scrollToTop} className="character-container">
          <img alt="fly character" src={waitingToFly} className="flyingChar" />
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
        </div>
      )}
      {isClicked && (
        <div onClick={scrollToTop} className="character-container fly-up">
          <img alt="fly character" src={imageMain} className="flyingChar" />
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
        </div>
      )}
    </div>
  );
};

export default Fly;

import React, { useRef } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../Assets/animation/coding.json";

const NewHomeRightSide = () => {
  const codingAnimationRef = useRef();
  const codingAnimationStyle = {
    width: "40rem",
    // backgroundColor: "red",
  };

  return (
    <div style={codingAnimationStyle}>
      <Lottie
        lottieRef={codingAnimationRef}
        loop={true}
        animationData={codingAnimation}
      />
    </div>
  );
};

export default NewHomeRightSide;

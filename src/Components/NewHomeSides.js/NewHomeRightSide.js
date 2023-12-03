import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../Assets/animation/coding.json";

const NewHomeRightSide = () => {
  const codingAnimationRef = useRef();
  const codingAnimationStyle = {
    width: "40rem",
    animation: "scaleIn 1s ease",
  };

  useEffect(() => {
    codingAnimationRef.current.play(); // Start the animation
  }, []);

  return (
    <div style={codingAnimationStyle}>
      <style>
        {`
          @keyframes scaleIn {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <Lottie
        lottieRef={codingAnimationRef}
        loop={true}
        animationData={codingAnimation}
      />
    </div>
  );
};

export default NewHomeRightSide;

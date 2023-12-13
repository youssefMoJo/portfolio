import React, { useRef } from "react";
import NewHomeLeftSide from "./NewHomeSides.js/NewHomeLeftSide";
import NewHomeRightSide from "./NewHomeSides.js/NewHomeRightSide";

const NewHome = () => {
  const newHomeContainer = {
    height: "100vh",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4rem",
    gap: "8rem",
  };

  return (
    <div className="heroSec-container" id="home" style={newHomeContainer}>
      {/* <style>
        {`
          @media (max-width: 1000px) {
            .heroSec-container {
              flex-direction: column;
            }
          }
          
          `}
      </style> */}
      <NewHomeLeftSide />
      <NewHomeRightSide />
    </div>
  );
};

export default NewHome;

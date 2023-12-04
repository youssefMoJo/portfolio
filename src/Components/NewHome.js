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
    <div id="home" style={newHomeContainer}>
      <NewHomeLeftSide />
      <NewHomeRightSide />
    </div>
  );
};

export default NewHome;

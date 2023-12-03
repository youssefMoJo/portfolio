const NewHomeLeftSide = () => {
  const yAndMStyle = {
    fontSize: "18rem",
    fontFamily: "Playfair Display",
    display: "flex",
    alignItems: "center",
  };

  const yAndMSplitterStyle = {
    // width: "2rem",
    height: "20rem",
    borderRight: "13px solid white",
    margin: "0 1rem",
    borderRadius: "4px",
  };

  return (
    <div>
      <div style={yAndMStyle}>
        Y<span style={yAndMSplitterStyle}></span>M
      </div>
    </div>
  );
};

export default NewHomeLeftSide;

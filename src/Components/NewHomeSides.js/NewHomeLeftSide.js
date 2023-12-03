const NewHomeLeftSide = () => {
  const yAndMStyle = {
    fontSize: "18rem",
    fontFamily: "Playfair Display",
    display: "flex",
    alignItems: "center",
    gap: "3rem",
  };

  const yAndMSplitterStyle = {
    height: "20rem",
    borderRight: "13px solid white",
    borderRadius: "4px",
    animation: "expand 1s ease",
  };

  return (
    <div>
      <style>
        {`
          @keyframes expand {
            0% {
              height: 0;
            }
           
            100% {
              height: 20rem;
            }
          }
        `}
      </style>
      <div style={yAndMStyle}>
        Y<span style={yAndMSplitterStyle}></span>M
      </div>
    </div>
  );
};

export default NewHomeLeftSide;

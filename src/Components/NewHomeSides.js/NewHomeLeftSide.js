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
    borderRight: "8px solid white",
    borderRadius: "4px",
    animation:
      "expand 0.6s ease, appearFromLeft 1s ease, scaleIn 1s ease, scaleUpY 0.6s ease",
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

          @keyframes appearFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            0% {
              transform: scaleX(0);
            }

            100% {
              transform: scaleX(1);
            }
          }

          @keyframes scaleUpY {
            0% {
              transform: scaleY(0);
            }

            100% {
              transform: scaleY(1);
            }
          }
          
        `}
      </style>
      <div style={yAndMStyle}>
        <span
          style={{
            fontFamily: "Playfair Display",
            animation: "scaleUpY 0.6s ease",
            display: "inline-block",
          }}
        >
          Y
        </span>

        <span style={yAndMSplitterStyle}></span>
        <span
          style={{
            animation: "appearFromLeft 0.6s ease, scaleIn  0.6s ease",
            display: "inline-block",
            fontFamily: "Playfair Display",
            transformOrigin: "left center",
          }}
        >
          M
        </span>
      </div>
    </div>
  );
};

export default NewHomeLeftSide;

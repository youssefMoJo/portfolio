import NewHomeLeftSide from "./NewHomeSides.js/NewHomeLeftSide";

const NewHome = () => {
  const newHomeContainer = {
    height: "100vh",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4rem",
  };

  return (
    <div style={newHomeContainer}>
      <NewHomeLeftSide />
    </div>
  );
};

export default NewHome;

import "../Styles/ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="card">
      <img
        className="projectImg"
        src={require("../Assets/myflex.png")}
        alt="myflex"
      />
      <div className="titleSection">
        <div>
          <div>title</div>
          <div>Date</div>
        </div>
        <div>
          <div>type</div>
          <div>team project</div>
        </div>
      </div>
      <div>Description</div>
      <div>technologies</div>
    </div>
  );
};

export default ProjectCard;

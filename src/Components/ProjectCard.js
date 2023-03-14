import "../Styles/ProjectCard.css";
import { GoMarkGithub } from "react-icons/go";

const ProjectCard = () => {
  const tech = [
    { name: "#React", color: "#00c8ff" },
    { name: "#React Native", color: "#00c8ff" },
    { name: "#MongoDB", color: "#14da56" },
    { name: "#Node", color: "#dadd14" },
    { name: "#Socket.IO", color: "#ffffff" },
  ];
  return (
    <div className="card">
      <img
        className="projectImg"
        src={require("../Assets/myflex.png")}
        alt="myflex"
      />
      <div className="titleSection">
        <div className="titleSectionLeftSide">
          <div className="title">MyFlex</div>
          <div className="date">June 2020 - July 2020</div>
        </div>
        <div className="titleSectionMiddleLine"></div>
        <div className="titleSectionRighttSide">
          <div className="appType">Web App</div>
          <div className="teamOrSoloProject">Team project</div>
        </div>
      </div>
      <div className="description">
        This web application intends to help you decide what movie to watch next
        with a recommendation feature and movie tracking system to enhance your
        viewing experience.
      </div>
      <div className="technologies">#Socket.IO</div>
      <div className="links">
        <div className="visitProjectButton">
          <a href={"./"}>VISIT THE WEBSITE</a>
        </div>
        <GoMarkGithub className="gitHubButton" />
      </div>
    </div>
  );
};

export default ProjectCard;

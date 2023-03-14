import "../Styles/ProjectCard.css";
import { GoMarkGithub } from "react-icons/go";

const ProjectCard = (props) => {
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
          {props.name == "Heart Disease Prediction" ? (
            <div className="HeartDiseasePrediction">{props.name}</div>
          ) : (
            <div className="title">{props.name}</div>
          )}

          <div className="date">{props.date}</div>
        </div>
        <div className="titleSectionMiddleLine"></div>
        <div className="titleSectionRighttSide">
          <div className="appType">{props.appType}</div>
          <div className="teamOrSoloProject">{props.teamOrSoloProject}</div>
        </div>
      </div>
      <div className="description">{props.discription}</div>
      <div className="technologies">
        #Python (pandas, NumPy, matplotlib, scikit-learn) #React Native
      </div>
      <div className="links">
        <div className="visitProjectButton">
          <a target="_blank" href={props.link}>
            VISIT THE WEBSITE
          </a>
        </div>
        <GoMarkGithub className="gitHubButton" />
      </div>
    </div>
  );
};

export default ProjectCard;

import "../Styles/ProjectCard.css";
import { GoMarkGithub } from "react-icons/go";

const ProjectCard = (props) => {
  const technologiesColors = {
    React: "#00c8ff",
    "React Native": "#00c8ff",
    MongoDB: "#14da56",
    Node: "#dadd14",
    "Python (pandas, NumPy, matplotlib, scikit-learn)": "#dadd14",
    "Socket.IO": "#ffffff",
    Firebase: "#ff9a00",
    "AWS (DynamoDB, Cognito, API Gateway, Lambda)": "#ff9a00",
  };

  return (
    <div className="card">
      <img
        className="projectImg"
        src={require(`../Assets/${props.imageName}`)}
        alt="myflex"
      />
      <div className="titleSection">
        <div className="titleSectionLeftSide">
          {props.name === "Heart Disease Prediction" ? (
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
      {props.specialStyling ? (
        <div className="technologiesWithSpecialStyling">
          {props.techUsed.map((tech, i) => {
            return (
              <div
                key={i}
                style={{ color: technologiesColors[tech], marginRight: "10px" }}
              >
                #{tech}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="technologies">
          {props.techUsed.map((tech, i) => {
            return (
              <div
                key={i}
                style={{ color: technologiesColors[tech], marginRight: "10px" }}
              >
                #{tech}
              </div>
            );
          })}
        </div>
      )}

      <div className="links">
        <a
          className="visitProjectButton"
          rel="noreferrer"
          target="_blank"
          href={props.link}
        >
          VISIT THE WEBSITE
        </a>
        <a rel="noreferrer" target="_blank" href={props.github}>
          <GoMarkGithub className="gitHubButton" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

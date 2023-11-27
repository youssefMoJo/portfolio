import "../Styles/NewProjectCard.css";
import { GoMarkGithub } from "react-icons/go";

const NewProjectCard = (props) => {
  const newCard = props.isEven ? "newCard evenCard" : "newCard oddCard";
  const cardColorClass = props.cardColorClass || "";

  return (
    <div data-aos="flip-down" className={`${newCard} ${cardColorClass}`}>
      <div className="leftSec">
        <div className="cardTitle">{props.name}</div>

        <div className="projectLabelsContainer">
          <span class="project-duration">{props.date}</span>
          <span className="cardAppType">{props.appType}</span>
          <span className="cardTeamOrSoloProject">
            {props.teamOrSoloProject}
          </span>
          <span className="newCardGitHubButton">
            <a rel="noreferrer" target="_blank" href={props.github}>
              <GoMarkGithub /> GitHub
            </a>
          </span>
        </div>

        <div className="cardDescription"> {props.discription}</div>

        <div className="cardTechnologiesContainer">
          {props.techUsed.map((tech, i) => {
            return <span className="eachCardTech">{tech}</span>;
          })}
        </div>

        <div className="newCardLinks">
          <a
            className="newCardVisitProjectButton"
            rel="noreferrer"
            target="_blank"
            href={props.link}
          >
            VISIT THE WEBSITE
          </a>
        </div>
      </div>
      <div className="rightSec">
        <span className="redGlow"></span>
        <img
          data-aos={props.isEven ? "fade-left" : "fade-right"}
          className="rightSecImage"
          src={require(`../Assets/${props.imageName}`)}
        />
      </div>
    </div>
  );
};

export default NewProjectCard;

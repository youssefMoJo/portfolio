import "../Styles/NewProjectCard.css"
import { GoMarkGithub } from "react-icons/go";

const NewProjectCard = (props) => {
    const newCard = props.isEven ? 'newCard evenCard' : 'newCard oddCard';
    const cardColorClass = props.cardColorClass || '';

    return (
        <div className={`${newCard} ${cardColorClass}`}>
            <div className="leftSec">
                <div className="cardTitle">FadfadA</div>

                <div className="projectLabelsContainer">
                    <span class="project-duration">3 months</span>
                    <span className="cardAppType">Mobile App</span>
                    <span className="cardTeamOrSoloProject">Solo Project
                    </span>
                    <span className="newCardGitHubButton">
                        <a rel="noreferrer" target="_blank" href={props.github}>
                            <GoMarkGithub />  GitHub
                        </a>
                    </span>
                </div>

                <div className="cardDescription">This mobile application provides users with a pool of quotes, allowing them to add and remove quotes from their list and share them with others.
                </div>

                <div className="cardTechnologiesContainer">
                    <span className="eachCardTech">React Native</span>
                    <span className="eachCardTech">Node</span>
                    <span className="eachCardTech">Firebase ( Realtime DB, Hosting )</span>
                </div>

                <div className="newCardLinks">
                    <a
                        className="newCardVisitProjectButton"
                        rel="noreferrer"
                        target="_blank"
                    >
                        VISIT THE WEBSITE
                    </a>

                </div>
            </div>
            <div className="rightSec">
                <span className="redGlow"></span>
                <img
                    className="rightSecImage"
                    src={require("../Assets/NewSparkleDrive.png")}
                />
            </div>
        </div>
    )
}

export default NewProjectCard
import "../Styles/NewProjectCard.css"
import { GoMarkGithub } from "react-icons/go";

const NewProjectCard = (props) => {
    return (
        <div className="newCard">
            <div className="leftSec">
                <div className="cardTitle">FadfadA</div>

                <div className="projectLabelsContainer">
                    <span class="project-duration">3 months</span>
                    <span className="cardAppType">Mobile App</span>
                    <span className="cardTeamOrSoloProject">Solo Project
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
                    <a rel="noreferrer" target="_blank" href={props.github}>
                        <GoMarkGithub className="newCardGitHubButton" />
                    </a>
                </div>
            </div>
            <div className="rightSec">2</div>
        </div>
    )
}

export default NewProjectCard
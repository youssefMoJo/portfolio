import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectsData";
import NewProjectCard from "../Components/NewProjectCard";

const Projects = () => {

  const cardColors = ["#5fd77e", "#1277fa", "#f55e45", "#6e46a6", "#a91d34"]

  return (
    <div id="projects" className="ProjectsContainer">
      <div className="ProjectTitleContainer">
        <div className="ProjectsTitle">
          <span className="Hashtag">#</span> Projects
        </div>
        <div className="line"></div>
        <img
          className="ProjectsSittingImg"
          src={require("../Assets/sitting and reading trans.png")}
          alt="Hi"
        />
      </div>

      <div className="cardsContainer">
        {projectsData.map((project, i) => {
          const colorIndex = i % cardColors.length;
          const cardColorClass = colorIndex < cardColors.length ? `color-${colorIndex + 1}` : '';

          return (
            <NewProjectCard
              key={i}
              cardColorClass={cardColorClass}
              isEven={i % 2 === 0}
              name={project.name}
              date={project.date}
              appType={project.appType}
              teamOrSoloProject={project.teamOrSoloProject}
              discription={project.discription}
              link={project.link}
              techUsed={project.Technologies}
              github={project.github}
              specialStyling={project.specialStyling}
              imageName={project.imageName}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Projects;

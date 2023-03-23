import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectsData";

const Projects = () => {
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
          return (
            <ProjectCard
              key={i}
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

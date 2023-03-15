import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsTitle">
        <span className="Hashtag">#</span> Projects
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

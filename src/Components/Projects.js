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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

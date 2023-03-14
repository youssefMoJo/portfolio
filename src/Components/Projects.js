import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsTitle">
        <span className="Hashtag">#</span> Projects
      </div>

      <div className="cardsContainer">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

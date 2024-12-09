import { ProjectCard } from './elements/project-card';
import { projects } from 'data/projects-data';
import './pages.scss';

const ProjectsPage = () => {
  return (
    <div className="page_wraper">
      <ul className="projects_list">
        {projects.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;

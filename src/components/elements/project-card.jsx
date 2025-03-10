import Tooltip from './tooltip';
import './projects.scss';
import '../../index.css';
import '../../main.scss';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project_card">
      <h3 className="card_title">
        {project.appLink ? (
          <a href={project.appLink} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        ) : (
          <span>{project.title}</span>
        )}
      </h3>
      <img src={project.img} alt={project.title} className="card_image" />
      <div className="tech_stack_wraper">
        <div className="tech_stack">
          {project.techStack.map((el, idx) => (
            <Tooltip key={idx} text={el.name}>
              <img src={el.img} alt={el.name} className="icon_filter" />
            </Tooltip>
          ))}
        </div>
        <div className="tech_stack_tale" />
      </div>
      {project.codeLink && (
        <div className="github">
          <Tooltip text="View code">
            <a href={project.codeLink} target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/dvloxectq/image/upload/v1706436500/PersonalPage/icons/github-142-svgrepo-com_asfb0r.svg"
                alt="git-hub"
                className="icon_filter"
              />
            </a>
          </Tooltip>
        </div>
      )}
      <div className="clickable_area">
        {project.appLink ? (
          <a
            href={project.appLink}
            target="_blank"
            rel="noreferrer"
            className="page_link"
          >
            {''}
          </a>
        ) : (
          <span>{''}</span>
        )}
      </div>
      <p className="card_description">{project.description}</p>
    </div>
  );
};

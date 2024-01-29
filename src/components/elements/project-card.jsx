import Tooltip from './tooltip';
import './projects.scss';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project_card">
      <h3 className="card_title">
        <a href={project.appLink} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h3>
      <img src={project.img} alt={project.title} width={400} height={400} />
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
      <div className="clickable_area">
        <a
          href={project.appLink}
          target="_blank"
          rel="noreferrer"
          className="page_link"
        >
          {''}
        </a>
      </div>
      <p className="card_description">{project.description}</p>
    </div>
  );
};

import Tooltip from './tooltip';
import html from '../../img/html5-01-svgrepo-com.svg';
import css from '../../img/css3-01-svgrepo-com.svg';
import js from '../../img/java-script.svg';
import git from '../../img/github-142-svgrepo-com.svg';
import tetris from '../../img/tetris.jpg';
import './projects.scss';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project_card">
      <h3 className="card_title">Tetris Game</h3>
      <img src={tetris} alt="Tetris Game" width={400} height={400} />
      <div className="tech_stack">
        <Tooltip text="HTML">
          <img src={html} alt="html" className="icon_filter" />
        </Tooltip>
        <Tooltip text="CSS">
          <img src={css} alt="css" className="icon_filter" />
        </Tooltip>
        <Tooltip text="JavaScript">
          <img src={js} alt="js" className="icon_filter" />
        </Tooltip>
      </div>
      <div className="github">
        <Tooltip text="View code">
          <a
            href="https://github.com/OleksandrKochenko/tetris"
            target="_blank"
            rel="noreferrer"
          >
            <img src={git} alt="git-hub" className="icon_filter" />
          </a>
        </Tooltip>
      </div>
      <div className="clickable_area">
        <a
          href="https://oleksandrkochenko.github.io/tetris/"
          target="_blank"
          rel="noreferrer"
          className="page_link"
        >
          {''}
        </a>
      </div>
      <p className="card_description">
        Simple implementation of wellknown puzzle game. There are 7 levels with
        different falling down speed, pause and start buttons, current and total
        score.
      </p>
    </div>
  );
};

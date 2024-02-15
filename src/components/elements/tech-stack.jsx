import { useState } from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import techStack from '../../data/tech-stack-data';
import './home.page.scss';

export const TechStack = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section_wraper">
      <h3 className="section_title">Technology stack</h3>
      <ul className="tech_list" style={{ height: expanded && 'fit-content' }}>
        {techStack.map((el, idx) => (
          <li className="tech_item" key={idx}>
            <img src={el.icon} alt={el.title} width={60} height={60} />
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
      <p
        className="full_btn"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <p className="blinker"></p>
        {expanded ? (
          <>
            <span className="twist_arrow">
              <ArrowCircleLeft
                fontSize="small"
                style={{ fill: 'chocolate', zIndex: 1 }}
              />
            </span>
            <span>View less</span>
          </>
        ) : (
          <>
            <span className="twist_arrow">
              <ArrowCircleRight
                fontSize="small"
                style={{ fill: 'chocolate', zIndex: 1 }}
              />
            </span>
            <span>View more</span>
          </>
        )}
      </p>
    </div>
  );
};

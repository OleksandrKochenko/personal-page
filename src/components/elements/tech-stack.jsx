import { useState } from 'react';
import { ChevronsDown, ChevronsUp } from 'react-feather';
import techStack from '../../data/tech-stack-data';
import './home.page.scss';

export const TechStack = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section_wraper">
      <h3 className="section_title">Technology stack</h3>
      <ul className={`tech_list ${expanded ? 'fit_content' : ''}`}>
        {techStack.map((el, idx) => (
          <li className="tech_item" key={idx}>
            <img src={el.icon} alt={el.title} width={60} height={60} />
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
      <div
        className="full_btn"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? (
          <>
            <ChevronsUp size={28} className="link_arrow" />
            <span className="link_text">View less</span>
          </>
        ) : (
          <>
            <ChevronsDown size={28} className="link_arrow" />
            <span className="link_text">View more</span>
          </>
        )}
      </div>
    </div>
  );
};

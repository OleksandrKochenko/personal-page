import { Link } from 'react-router-dom';
import { ChevronsRight } from 'react-feather';
import './home.page.scss';
import '../../index.css';
import '../../main.scss';

export const ServicesShort = () => {
  return (
    <div className="section_wraper">
      <h3 className="section_title">Meet your needs</h3>
      <ul className="short_services">
        <li>
          <span className="service_item">
            Full-cycle web application development with a responsive design and
            SEO
          </span>
        </li>
        <li>
          <span className="service_item">
            Development of authentication and authorization modules
          </span>
        </li>
        <li>
          <span className="service_item">
            REST API development and integration
          </span>
        </li>
        <li>
          <span className="service_item">
            Creating of functional requirement documents and guides
          </span>
        </li>
      </ul>
      <div className="section_link">
        <Link to="/services" className="link_content">
          <ChevronsRight size={28} className="link_arrow" />{' '}
          <span className="link_text">Find out more about</span>
        </Link>
      </div>
    </div>
  );
};

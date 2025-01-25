import { Icon } from '@iconify/react';
import { services } from 'data/content-data';
import './pages.scss';

const ServicesPage = () => {
  return (
    <ul>
      {services.map((el, idx) => (
        <li className="services_block" key={idx}>
          <h3 className="section_title services_title">{el.heading}</h3>
          <div className="services_content">
            <Icon className="services_icon" icon={el.icon} />
            <ul className="services_list">
              {el.list.map((el, idx) => (
                <li key={idx} className="services_item">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServicesPage;

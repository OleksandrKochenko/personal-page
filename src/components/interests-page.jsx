import { interests } from 'data/content-data';
import './pages.scss';
import '../index.css';
import '../main.scss';

const InterestsPage = () => {
  return (
    <ul>
      {interests.map(el => (
        <li className="services_block" key={el.id}>
          <h3 className="section_title services_title">{el.heading}</h3>

          <ul className="services_list">
            {el.list.map((el, idx) => (
              <li key={idx} className="services_item">
                {el}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default InterestsPage;

import { NavLink } from 'react-router-dom';
import './main.nav.scss';
import '../../index.css';
import '../../main.scss';

export const MenuList = ({ onClose }) => {
  return (
    <ul className="navigation_list">
      <li className="navigation_item">
        <NavLink
          to={'/'}
          className={navData => (navData.isActive ? 'active' : '')}
          onClick={onClose}
        >
          home
        </NavLink>
      </li>
      <li className="navigation_item">
        <NavLink
          to={'/projects'}
          className={navData => (navData.isActive ? 'active' : '')}
          onClick={onClose}
        >
          projects
        </NavLink>
      </li>
      <li className="navigation_item">
        <NavLink
          to={'/services'}
          className={navData => (navData.isActive ? 'active' : '')}
          onClick={onClose}
        >
          services
        </NavLink>
      </li>
      <li className="navigation_item">
        <NavLink
          to={'/certificates'}
          className={navData => (navData.isActive ? 'active' : '')}
          onClick={onClose}
        >
          certificates
        </NavLink>
      </li>
      <li className="navigation_item">
        <NavLink
          to={'/interests'}
          className={navData => (navData.isActive ? 'active' : '')}
          onClick={onClose}
        >
          interests
        </NavLink>
      </li>
    </ul>
  );
};
